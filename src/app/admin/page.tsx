import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminDashboard from './AdminDashboard'
import articlesData from '@/data/articles.json'

export const metadata = { title: 'Admin — Tom Guy' }

export default async function AdminPage() {
  const authed = await isAuthenticated()
  if (!authed) redirect('/admin/login')
  return <AdminDashboard initialArticles={articlesData} />
}
