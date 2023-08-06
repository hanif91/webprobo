
import { auth } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs';
import { NextResponse } from "next/server";
import { redirect } from 'next/navigation'

import prismadb from "@/lib/prismadb";

export async function POST(
  req : Request 
  ) {
  try {
     const userLogin =  auth();
     const user = await currentUser();

     console.log(userLogin)
     console.log(user)

    //  redirect('/login')
     
    // const { userId } = auth();
    // const body = await req.json();
    // const { name } = body;

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status : 401 })
    // }

    // if (!name) {
    //   console.log(name);
    //   return new NextResponse("Name is Required", { status : 400 })
    // }
  


    // const store = await prismadb.store.create({
    //   data : {
    //     name,
    //     userId
    //   }
    // });
    
    // return NextResponse.json(store);

  } catch (error) {
    // console.log('[STORES_POST]',error);
    // return new NextResponse("Internal Error", { status : 500 })

  }
}