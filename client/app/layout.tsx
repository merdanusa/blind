import "./globals.css";
import Link from "next/link";
import Image from "next/image";

// fix
export const metadata = {
  title: "Buggy App",
  description: "An app with bugs",
};

export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="eng">
      <body>
        <header className="bg-gray-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Image alt={"logo"} src="/logo.png" className="h-10 w-10" />
              <nav className="flex gap-6">
                <Link
                  href="/"
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/users"
                  className="hover:text-blue-400 transition-colors"
                >
                  Users
                </Link>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
