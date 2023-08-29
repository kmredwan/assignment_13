import { headers } from "next/headers";
import { NextResponse } from "next/server";

export  function POST(res,req){

    const list= headers()
    const user_id= list.get("userId")
    const user_email= list.get("userEmail")

    return NextResponse.json({user_id : user_id , user_email:user_email})

}