"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { registerAction } from "@/actions/auth";

const inputClass =
  "w-full rounded-xl border border-neutral-400 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-300 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20";

const labelClass = "text-xs font-semibold text-neutral-900";

const PasswordField = ({ id, name, label, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className={`${inputClass} pr-11`}
          required
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
    </div>
  );
};

export const RegisterForm = () => {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <div className="flex w-full max-w-[420px] flex-col items-center">
      <form
        action={formAction}
        className="w-full space-y-3.5 rounded-2xl bg-white px-7 py-7 shadow-xl shadow-emerald-900/10 sm:px-10"
      >
        <div className="space-y-1 text-center">
          <h1 className="text-lg font-bold text-neutral-900">Create Account</h1>
          <p className="text-xs text-neutral-400">
            Join us! Please fill in your details.
          </p>
        </div>

        <div className="space-y-1.5 pt-1">
          <label htmlFor="username" className={labelClass}>
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            defaultValue={state?.username}
            className={inputClass}
            required
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            defaultValue={state?.email}
            className={inputClass}
            required
          />
        </div>

        <PasswordField
          id="password"
          name="password"
          label="Password"
          placeholder="Enter password"
        />
        <PasswordField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          placeholder="Re-enter password"
        />

        {state?.error && <p className="text-sm text-red-500">{state.error}</p>}

        <div className="pt-1">
          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-xl bg-emerald-500 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600 disabled:opacity-60"
          >
            {pending ? "Creating account..." : "Sign up"}
          </button>
        </div>

        <p className="pt-1 text-center text-xs text-neutral-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};
