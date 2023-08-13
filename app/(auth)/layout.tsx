
// import { ModeToggle } from '@components/ModeToggle'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
 
    <div className='pt-[100px] pb-4 md:pt-[120px] md:pb-[15px] xl:pt-[120px] xl:pb-[15px] 2xl:pt-[120px] 2xl:pb-[15px]'>



      <div className="flex items-center justify-center h-full w-full ">
        {children}
      </div>
    </div>

  )
}
