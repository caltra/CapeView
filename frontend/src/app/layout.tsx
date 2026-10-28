import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/ui/Header";
import { NotificationProvider } from "@/context/NotificationContext";


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

        <main className="grow w-2/3 mx-auto">
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </main>
      </body>
    </html>
  );
}
