"use client";

import { createContext, useContext, useMemo } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ user, children }) => {
  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      role: user?.role ?? null,
      isAdmin: user?.role === "admin",
      isSeller: user?.role === "penjual",
      isBuyer: user?.role === "pembeli",
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth harus dipakai di dalam AuthProvider");
  }

  return context;
};
