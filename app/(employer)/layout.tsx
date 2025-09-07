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

      <main className="min-h-screen bg-muted/30 w-screen p-4 transition-all duration-300">
        <SidebarTrigger />

        {children}
      </main>
    </SidebarProvider>
  );
};

export default EmployersLayout;
