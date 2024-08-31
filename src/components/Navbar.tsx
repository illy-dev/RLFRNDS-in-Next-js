import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
    return(
        <div>        
            <Link href="/signup"><Button>SignUp</Button></Link>
        </div>
    );
}