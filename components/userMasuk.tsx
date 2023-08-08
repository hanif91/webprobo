'use client';

import { PostDataUprofile } from "@/types/userProfile";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect,useState } from "react";
import { auth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import type { UserResource } from '@clerk/types';



export default function UserMasuk() {
  const { isLoaded, isSignedIn, user } = useUser();

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
      toast.success('Succesful Log In');
     } 

     
   } catch (error) {
      toast.error(`Someting Error .. (${error})`)
    } finally {

    }
  }

  useEffect(() => {

    if(isSignedIn){
      const postData=desctructUser2(user);
      console.log(postData)
      onSubmit(postData)
    }
  }, [])
  
  

  return (
    <>
    </>
   )
}
