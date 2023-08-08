'use client';

import { PostDataUprofile } from "@/types/userProfile";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect,useState } from "react";



export default function UserMasuk() {
  const [postData, setPostData] = useState({
    id : "tesHanif",
    email: "Hanif@gmail.com",
    name: "Hanif Kurniawan",
    nohp : "08113366883",
    imageUrl: "tes Image",
  });


  const onSubmit = async (values : PostDataUprofile) => {
    try {

     const response = await axios.post('/api/sign/create',values);
      
     toast.success('Successfully created!');
      console.log("test")
   } catch (error) {
      toast.error(`Someting Error .. (${error})`)
    } finally {

    }
  }

  useEffect(() => {
    onSubmit(postData)
  }, [])
  
  

  return (
    <>
    </>
   )
}
