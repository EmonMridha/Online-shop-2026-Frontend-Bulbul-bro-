import type { Metadata } from "next";
import "./globals.css";
import { Noto_Serif, Public_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const publicSansHeading = Public_Sans({ subsets: ['latin'], variable: '--font-heading' });

const notoSerif = Noto_Serif({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: "Bulbul bhai shop",
  description: "Developed by Emon Mridha",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-serif", notoSerif.variable, publicSansHeading.variable)}
    >
      <body className="min-h-full flex flex-col">{children}
        <Toaster position="top-right"></Toaster>
      </body>
    </html>
  );
}
