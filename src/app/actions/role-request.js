"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { getSession, requireRole } from "@/lib/session";

export async function requestSellerRole(message) {
  const session = await getSession();

  if (!session) {
    return { error: "Silakan login terlebih dahulu" };
  }

  if (session.user.role !== "PEMBELI") {
    return { error: "Hanya pembeli yang dapat mengajukan permintaan" };
  }

  const pending = await prisma.roleRequest.findFirst({
    where: { userId: session.user.id, status: "PENDING" },
  });

  if (pending) {
    return { error: "Permintaan Anda masih menunggu persetujuan admin" };
  }

  await prisma.roleRequest.create({
    data: {
      userId: session.user.id,
      message: message?.trim() || null,
    },
  });

  revalidatePath("/");
  return { success: true };
}

export async function getPendingRequests() {
  await requireRole("ADMIN");

  return prisma.roleRequest.findMany({
    where: { status: "PENDING" },
    include: { user: { select: { id: true, name: true, email: true } } },
    orderBy: { createdAt: "asc" },
  });
}

export async function approveRequest(requestId) {
  await requireRole("ADMIN");

  const request = await prisma.roleRequest.findUnique({
    where: { id: requestId },
  });

  if (!request || request.status !== "PENDING") {
    return { error: "Permintaan tidak ditemukan atau sudah diproses" };
  }

  await prisma.$transaction([
    prisma.roleRequest.update({
      where: { id: requestId },
      data: { status: "APPROVED", reviewedAt: new Date() },
    }),
    prisma.user.updateMany({
      where: { id: request.userId, role: "PEMBELI" },
      data: { role: "PENJUAL" },
    }),
  ]);

  revalidatePath("/admin/requests");
  return { success: true };
}

export async function rejectRequest(requestId) {
  await requireRole("ADMIN");

  const result = await prisma.roleRequest.updateMany({
    where: { id: requestId, status: "PENDING" },
    data: { status: "REJECTED", reviewedAt: new Date() },
  });

  if (result.count === 0) {
    return { error: "Permintaan tidak ditemukan atau sudah diproses" };
  }

  revalidatePath("/admin/requests");
  return { success: true };
}
