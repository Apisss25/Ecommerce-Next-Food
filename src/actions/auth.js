'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { apiFetch, firstError, TOKEN_COOKIE } from '@/lib/api'

const SEVEN_DAYS = 60 * 60 * 24 * 7

async function saveToken(token) {
  const store = await cookies()
  store.set(TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SEVEN_DAYS,
  })
}

export async function loginAction(prevState, formData) {
  const login = String(formData.get('login') || '').trim()
  const password = String(formData.get('password') || '')

  const { ok, data } = await apiFetch('/login', {
    method: 'POST',
    auth: false,
    body: { login, password },
  })

  if (!ok) {
    return { error: firstError(data, 'Login gagal'), login }
  }

  await saveToken(data.token)
  redirect('/')
}

export async function registerAction(prevState, formData) {
  const name = String(formData.get('name') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const password = String(formData.get('password') || '')
  const confirm = String(formData.get('confirm') || '')

  if (password !== confirm) {
    return { error: 'Konfirmasi password tidak sama', name, email }
  }

  const { ok, data } = await apiFetch('/register', {
    method: 'POST',
    auth: false,
    body: { name, email, password },
  })

  if (!ok) {
    return { error: firstError(data, 'Registrasi gagal'), name, email }
  }

  await saveToken(data.token)
  redirect('/')
}

export async function logoutAction() {
  await apiFetch('/logout', { method: 'POST' })

  const store = await cookies()
  store.delete(TOKEN_COOKIE)

  redirect('/login')
}
