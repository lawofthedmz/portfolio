import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Murphy Glawe",
  description: "Cybersecurity Engineering Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>        <div className="pt-24">{children}</div>
        <NavBar />
      </body>
    </html>
  );
}