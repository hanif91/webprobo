import { ThemeProvider } from "@/components/theme-provider"
// import { ModeToggle } from '@components/ModeToggle'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
    

    <div className="flex items-center justify-center h-full w-full">
      {children}
    </div>

  )
}
