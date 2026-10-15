import { cookies } from "next/headers";

export const TOKEN_COOKIE = "token";

export async function apiFetch(
  path,
  { method = "GET", body, auth = true } = {},
) {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (auth) {
    const token = (await cookies()).get(TOKEN_COOKIE)?.value;
    if (token) headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(`${process.env.API_URL}${path}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, data };
  } catch {
    return {
      ok: false,
      status: 0,
      data: { message: "Tidak dapat terhubung ke server" },
    };
  }
}

export function firstError(data, fallback) {
  if (data?.errors) {
    const first = Object.values(data.errors)[0];
    if (first?.[0]) return first[0];
  }
  return data?.message || fallback;
}
