import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kemahasiswaan UNBL",
  description: "Portal Kemahasiswaan",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased" data-theme="light">

      <body className="bg-surface text-on-surface flex min-h-screen flex-col font-body-md text-body-md">
        {children}
      </body>

    </html>
  );
}
