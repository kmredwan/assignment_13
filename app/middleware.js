import { NextResponse } from "next/server";
export function middleware(res, req) {
  if (req.nextUrl.pathname.startsWith("/api/user")) {
    const reqHeader = new Headers(req.headers);
    const token = reqHeader.get("token");

    if (token === "ABC-123-BCB") {
      reqHeader.set("userId", "001");
      reqHeader.set("userEmail", "examelpal@gmail.com");

      return NextResponse.next({
        request: { headers: reqHeader },
      });
    } else {
      return NextResponse.json({}, { status: 401 });
    }
  }
}
