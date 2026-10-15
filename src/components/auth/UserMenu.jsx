'use client'

import { useState } from 'react'
import { User } from 'lucide-react'
import { logoutAction } from '@/actions/auth'

export const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
      >
        <User size={20} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-52 rounded-lg bg-[#1c1c1c] p-2 text-sm text-neutral-300 shadow-lg">
          <p className="truncate px-3 pt-2 text-white">{user.name}</p>
          <p className="truncate px-3 pb-2 text-xs capitalize text-neutral-500">{user.role}</p>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full rounded-md px-3 py-2 text-left hover:bg-white/5"
            >
              Logout
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
