
import { auth } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation'

import prismadb from "@/lib/prismadb";

export async function POST(
  req : Request 
  ) {
  try {
    //  const userLogin =  auth();
    //  const user = await currentUser();

    //  console.log(userLogin)
    //  console.log(user)

    //  redirect('/login')
     
    // const { userId } = auth();
    console.log("1")
    const body = await req.json();
    const dataPost = body;


    if (!dataPost) {

      return new NextResponse("Data Body kosong", { status : 400 })
    }

    console.log("test masuk");
    const user = await prismadb.user.create({
      data : {
        id : dataPost?.id,
        email : dataPost?.email,
        profile : {
          create : {
            name : dataPost?.name,
            nohp : dataPost?.nohp,
            imageUrl : dataPost?.imageUrl
          },
        }
      }
    });

    console.log(user);
    return NextResponse.json(user);

  } catch (error) {
    console.log('[STORES_POST]',error);
    return new NextResponse("Internal Error", { status : 500 })
  }
}