import Link from "next/link";

export default function Nav(){

    return(
        <nav className="flex gap-8 shadow-lg p-4 justify-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/setCookies"}>Set Cookies</Link>
            <Link href={"http://localhost:3000/api/product"}>Redirect</Link>
        </nav>
    )
}