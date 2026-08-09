import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminDashboard from './AdminDashboard'
import { getArticles } from '@/lib/articles-store'

export const metadata = { title: 'Admin - Tom Guy' }
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const authed = await isAuthenticated()
  if (!authed) redirect('/admin/login')
  const articles = await getArticles()
  return <AdminDashboard initialArticles={articles} />
}
