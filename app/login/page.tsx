import { getProviders } from "next-auth/react";
import { LoginButtons } from "@/components/LoginButtons"; // Assuming this path is correct
import Image from "next/image";

export default async function SignInPage() {
  const providers = await getProviders();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-4 sm:px-0">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md sm:p-8">
        <Image
          src={"/talentNestIcon.png"}
          alt="talent nest icon"
          width={75}
          height={75}
          className="mx-auto my-4 sm:my-6"
        />
        <h1 className="mb-1 text-center text-xl font-bold tracking-wider text-gray-800 sm:mb-2 sm:text-2xl">
          TALENT NEST
        </h1>
        <p className="mb-6 text-center text-sm text-gray-500 sm:mb-8">
          Sign in to save jobs and apply
        </p>

        <LoginButtons providers={providers} />

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
