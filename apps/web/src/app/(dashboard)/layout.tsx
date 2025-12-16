import type React from "react";
import type { Metadata } from "next";
import SidebarNav from "../../components/SidebarNav";
import { NotificationProvider } from "../../components/NotificationManager";

export const metadata: Metadata = {
	title: "Reality Ware",
	description: "Reality Ware - Hack Club Project",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NotificationProvider>
			{/* Sidebar */}
			<aside className="w-72 bg-neutral p-4 rounded-lg border border-neutral flex flex-col">
				<SidebarNav />
			</aside>

			{/* Main content */}
			<main className="flex-1 rounded-xl bg-background flex flex-col overflow-hidden border border-neutral">
				<div className="overflow-y-auto p-8">{children}</div>
			</main>
		</NotificationProvider>
	);
}
