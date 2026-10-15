import Link from 'next/link'
import { getCurrentUser } from '@/lib/session'
import { UserMenu } from '@/components/auth/UserMenu'

export const AuthButton = async () => {
  const user = await getCurrentUser()

  if (!user) {
    return (
      <Link
        href="/login"
        className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
      >
        Login
      </Link>
    )
  }

  return <UserMenu user={user} />
}
