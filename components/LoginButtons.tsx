"use client";

import { signIn, getProviders } from "next-auth/react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

type LoginButtonsProps = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

export function LoginButtons({ providers }: LoginButtonsProps) {
  const getProviderIcon = (providerName: string) => {
    switch (providerName) {
      case "GitHub":
        return <FaGithub className="mr-3 h-5 w-5" />;
      case "Google":
        return <FaGoogle className="mr-3 h-5 w-5" />;
      case "Facebook":
        return <FaFacebook className="mr-3 h-5 w-5 text-blue-600" />;
      default:
        return null;
    }
  };

  const buttonStyle = `
    flex w-full items-center justify-center rounded-lg border border-slate-300 
    bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm 
    transition-all duration-300 ease-in-out hover:bg-slate-100 
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
    sm:text-base 
  `;

  return (
    <div className="space-y-4">
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className={buttonStyle}
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            >
              {getProviderIcon(provider.name)}
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}
