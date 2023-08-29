import { redirect } from "next/navigation";
import { NextResponse } from "next/server";



//JSON Response
export async function POST(req, res){

  const requestBody= await req.json()

  let message = requestBody['message']
  let version = requestBody['version']

 return NextResponse.json({message,version})  

}

//redirect
export async function GET(req, res){


  redirect("/")

}


