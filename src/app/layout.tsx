import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Servicios IT | Mi Web",
  description: "Soporte y soluciones informáticas para empresas y particulares.",
  openGraph: {
    title: "Servicios IT | Mi Web",
    description: "Soporte y soluciones informáticas para empresas y particulares.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">Mi Web IT</a>
            <ul className="flex items-center gap-6">
              <li><a className="hover:underline" href="/">Inicio</a></li>
              <li><a className="hover:underline" href="/servicios">Servicios</a></li>
              <li><a className="hover:underline" href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Mi Web IT · Zaragoza · contacto@tu-dominio.com
          </div>
        </footer>
      </body>
    </html>
  );
}
