import { auth } from "@/auth";
import { redirect } from "next/navigation";
import SignInCard from "@/components/shared/SignInCard";
export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return <SignInCard />;
}
