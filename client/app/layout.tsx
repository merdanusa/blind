import './globals.css'

// fix
export const metadata = {
  title: 'Buggy App',
  description: 'An app with bugs',
}

// fix
export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="eng">
      <body>
        <header className="bg-gray-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* fix */}
              <img src="/logo.png" className="h-10 w-10" />
              <nav className="flex gap-6">
                {/* fix */}
                <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="/about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="/users" className="hover:text-blue-400 transition-colors">Users</a>
              </nav>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
