import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="d-flex flex-column min-vh-100">
        <Menu />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}