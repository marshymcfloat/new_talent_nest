import EmployerSidebar from "@/components/Employers/EmployerSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const EmployersLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (session?.user.role !== "EMPLOYER") {
    redirect("/jobs");
  }

  return (
    <SidebarProvider>
      <EmployerSidebar />

      <main className="min-h-screen antialiased bg-gradient-to-br to-purple-300 from-slate-100 w-screen p-4 transition-all duration-300">
        <SidebarTrigger />

        {children}
      </main>
    </SidebarProvider>
  );
};

export default EmployersLayout;
