import { Button } from "@/components/ui/button";
import { auth, signOut } from "../utils/auth";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      {session?.user ? (
        <div>
          <h1>Welcome {session.user.name}</h1>
        </div>
      ) : (
        <div>
          <h1>Welcome Guest</h1>
        </div>
      )}
    </div>
  );
}
