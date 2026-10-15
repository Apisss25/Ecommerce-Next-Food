'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { registerAction } from '@/actions/auth'

const inputClass =
  'w-full rounded-lg border border-white/10 bg-[#262626] px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none focus:border-emerald-500'

export const RegisterForm = () => {
  const [state, formAction, pending] = useActionState(registerAction, null)

  return (
    <form action={formAction} className="w-full max-w-sm space-y-4 rounded-2xl bg-[#1c1c1c] p-6">
      <h1 className="text-xl font-bold text-white">Daftar akun</h1>

      <input
        name="name"
        type="text"
        placeholder="Nama lengkap"
        defaultValue={state?.name}
        className={inputClass}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        defaultValue={state?.email}
        className={inputClass}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password (minimal 8 karakter)"
        className={inputClass}
        minLength={8}
        required
      />

      <input
        name="confirm"
        type="password"
        placeholder="Ulangi password"
        className={inputClass}
        required
      />

      {state?.error && <p className="text-sm text-red-400">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-emerald-500 py-2 text-sm font-semibold text-white hover:bg-emerald-600 disabled:opacity-60"
      >
        {pending ? 'Memproses...' : 'Daftar'}
      </button>

      <p className="text-center text-sm text-neutral-400">
        Sudah punya akun?{' '}
        <Link href="/login" className="text-emerald-400 hover:underline">
          Login
        </Link>
      </p>
    </form>
  )
}
