import SidebarNav from "@/components/SidebarNav";

export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen gap-4 bg-neutral p-4">
      <aside className="flex w-72 flex-col rounded-lg border border-neutral bg-neutral p-4">
        <SidebarNav />
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden rounded-xl border border-neutral bg-background">
        <div className="overflow-y-auto p-8">{children}</div>
      </main>
    </div>
  );
}
