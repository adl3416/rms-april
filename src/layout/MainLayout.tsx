import { ReactNode } from "react"
import Sidebar from "./Sidebar"

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-muted/50 p-4 overflow-y-auto">{children}</main>
    </div>
  )
}
