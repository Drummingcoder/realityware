import "./globals.css";
import type React from "react";
import type { Metadata } from "next";

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
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
