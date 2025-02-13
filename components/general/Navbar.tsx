import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeToggle } from "../general/ThemeToggle";
export function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="Gündüz Job Portal" width={70} height={70} />
        <h1 className="text-2xl font-bold">
          Gündüz<span className="text-primary">Job Portal</span>
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link href="/about">About</Link>
        <Link href="/jobs">Jobs</Link>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
}
