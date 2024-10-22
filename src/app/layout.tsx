import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("relative h-full bg-white", inter.className)}>
				<main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
					<Providers>
						<Navbar />
						<div className="flex-1 flex flex-col h-full">
							{children}
						</div>
						{/* ***Footer*** */}
					</Providers>
				</main>
			</body>
		</html>
	);
}
