
import prismadb from "@/lib/prismadb"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { currentUser } from '@clerk/nextjs';
import { toast } from "react-hot-toast";
import axios from "axios";
import { PostDataUprofile } from "@/types/userProfile";




export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId }  = auth()
  const userObj = await currentUser();
  const idEmailPrimary  = userObj?.primaryEmailAddressId;
  const emailObj = userObj?.emailAddresses.find((element) => element.id===idEmailPrimary );
  let phoneObj : any = {};
  let phonestr : any = "";
  if(!userObj?.primaryPhoneNumberId){
    phonestr = "";
  } else {
    phoneObj = userObj?.phoneNumbers.find((element) => element.id===userObj?.primaryPhoneNumberId);
    phonestr = phoneObj?.phoneNumber;
  }
  const postData : PostDataUprofile = {
    id : userObj?.id,
    email: emailObj?.emailAddress,
    name : `${userObj?.firstName} ${userObj?.lastName}`,
    nohp : phonestr,
    imageUrl : userObj?.imageUrl,
  };


  if(userId) {
    const user = await prismadb.user.findFirst({
      where : {
          id : userId,
      }
    });

    console.log(postData)

    if(!user) {

      try {
  
        const response = await axios.post('/api/sign/create',postData);

        console.log(response)
      } catch (error) {
        //sign
      } finally {

      }
    };
    console.log("tes2")
  } 

  // setup kita load first active store  id  ,, dan cek setelah redireti user to dashboard root
  //atau jika ngk ada sama sekali , keep userid inside the root dan show modal create store  
  return (
    <>
        {children}
    </>

  )
}