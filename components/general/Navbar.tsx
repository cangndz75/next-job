import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { ThemeToggle } from "../general/ThemeToggle";
import { auth, signOut } from "@/app/utils/auth";
export async function Navbar() {
  const session = await auth();

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
        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <Button variant="destructive">Logout</Button>
          </form>
        ) : (
          <Link
            href="/login"
            className={buttonVariants({ variant: "green", size: "lg" })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
