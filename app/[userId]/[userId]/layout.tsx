import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { currentUser } from '@clerk/nextjs';
import { toast } from "react-hot-toast";
import axios from "axios";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId }  = auth()
  const userObj = await currentUser();

  console.log("tes11")

  if(userId) {
    const user = await prismadb.user.findFirst({
      where : {
          id : userId,
      }
    });

    console.log("tes21")
    if(!user) {

      try {
  
        const response = await axios.post('/api/sign/create',userObj?.phoneNumbers);
    
        console.log(response)
        redirect(`/sign/${userId}`)
      } catch (error) {
         toast.error(`Someting Error .. (${error})`)
      } finally {

      }
    };
    console.log("tes21")

    if(user) {

      redirect(`/${user.id}`)
    };
  } 

  // setup kita load first active store  id  ,, dan cek setelah redireti user to dashboard root
  //atau jika ngk ada sama sekali , keep userid inside the root dan show modal create store  
  return (
    <>
        {children}
    </>

  )
}