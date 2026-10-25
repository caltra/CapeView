import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/ui/Header";


export const metadata: Metadata = {
  title: "CapeView",
  description: "Minecraft Cape Database",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="w-2/3 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
