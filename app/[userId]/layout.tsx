import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { toast } from "react-hot-toast";
import axios from "axios";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const { userId }  = auth()

  // if(!userId) {
    
  //     redirect('/')
  // } 

  // setup kita load first active store  id  ,, dan cek setelah redireti user to dashboard root
  //atau jika ngk ada sama sekali , keep userid inside the root dan show modal create store  
  return (
    <>
        {children}
    </>

  )
}