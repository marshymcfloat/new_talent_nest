import { EmployerAuthForm } from "@/components/EmployerAuthForm";
import Image from "next/image";
import { Suspense } from "react";

export default function EmployerSignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 sm:p-8 shadow-md border border-gray-200 relative space-y-4">
        <Suspense fallback={<div>Loading...</div>}>
          <EmployerAuthForm
            header={
              <div className="space-y-4">
                <h2 className="text-2xl tracking-widest uppercase font-bold flex flex-col justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      width={80}
                      height={80}
                      alt="Talent nest logo"
                      src={"/talentNestIcon.png"}
                    />
                  </div>
                </h2>
              </div>
            }
          />
        </Suspense>
      </div>
    </main>
  );
}
