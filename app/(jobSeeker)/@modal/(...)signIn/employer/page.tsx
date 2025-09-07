"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import { EmployerAuthForm } from "@/components/EmployerAuthForm";

export default function EmployeerInterceptedLoginPage() {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={(isOpen) => !isOpen && router.back()}>
      <DialogContent className="space-y-4">
        <EmployerAuthForm
          header={
            <DialogHeader>
              <DialogTitle className="text-2xl tracking-widest uppercase font-bold flex flex-col justify-center items-center space-y-4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    width={80}
                    height={80}
                    alt="Talent nest logo"
                    src={"/talentNestIcon.png"}
                  />
                </div>
              </DialogTitle>
            </DialogHeader>
          }
        />
      </DialogContent>
    </Dialog>
  );
}
