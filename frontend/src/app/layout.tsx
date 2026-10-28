import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/ui/Header";
import { NotificationProvider } from "@/context/NotificationContext";
import Notification from "@/components/ui/Notification";


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
        <NotificationProvider>
          <Notification />

          <Header />

          <main className="grow w-2/3 mx-auto">
            {children}
          </main>
        </NotificationProvider>
      </body>
    </html>
  );
}
