"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { loginAction } from "@/actions/auth";

const inputClass =
  "w-full rounded-xl border border-neutral-400 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-300 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState(loginAction, null);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center gap-5">
      <form
        action={formAction}
        className="w-full space-y-4 rounded-2xl bg-white px-7 py-8 shadow-xl shadow-emerald-900/10 sm:px-10"
      >
        <div className="space-y-1 text-center">
          <h1 className="text-lg font-bold text-neutral-900">Welcome Back!</h1>
          <p className="text-xs text-neutral-400">
            We missed you! Please enter your details.
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <label
            htmlFor="login"
            className="text-xs font-semibold text-neutral-900"
          >
            Email or username
          </label>
          <input
            id="login"
            name="login"
            type="text"
            placeholder="Enter your email or username"
            defaultValue={state?.login}
            className={inputClass}
            required
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="text-xs font-semibold text-neutral-900"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className={`${inputClass} pr-11`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex cursor-pointer items-center gap-2 text-neutral-400">
            <input
              type="checkbox"
              name="remember"
              className="h-4 w-4 rounded border-neutral-300 accent-emerald-500"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {state?.error && <p className="text-sm text-red-500">{state.error}</p>}

        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
          >
            {pending ? "Signing in..." : "Sign in"}
          </button>
        </div>

        <p className="pt-2 text-center text-xs text-neutral-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
