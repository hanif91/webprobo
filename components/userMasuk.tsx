'use client';

import { PostDataUprofile } from "@/types/userProfile";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import type { UserResource } from '@clerk/types';
import { useRouter } from 'next/navigation';



export default function UserMasuk( props : any ) {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  // function desctructUser(usr : UserResource) {
  //   return {
  //     id : usr.id,
  //     email : usr.primaryEmailAddress.emailAddress,
  //     name : usr.fullName,
  //     nohp : "",
  //     imageUrl : usr.imageUrl,
  //   }
  // }


  const desctructUser2 = (usr : UserResource ) : PostDataUprofile => {
    return {
      id : usr.id,
      email : usr.primaryEmailAddress.emailAddress,
      name : usr.fullName,
      nohp : "",
      imageUrl : usr.imageUrl,
    }
  }



  const onSubmit = async (values : PostDataUprofile) => {
    try {

     const response = await axios.post('/api/sign/create',values);
     
     if (response.statusText === 'OK') {
      if(props.userId) {
        toast.success('Succesful Log In');
        router.push(`/${props.userId}`)
      }       

     } 

     
   } catch (error) {
      toast.error(`Someting Error .. (${error})`)
    } finally {

    }
  }

  useEffect(() => {
    if(isSignedIn){
      const postData=desctructUser2(user);

      onSubmit(postData)
    }
  }, [])
  
  

  return (
    <>
    </>
   )
}
