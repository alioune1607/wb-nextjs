import InfoCards from "./components/InfoCards";

export default function Home() {
  return (
    <main className="container py-5">
      {/* La imagen de cabecera ya está en el componente Menu, 
        así que aquí solo ponemos el contenido principal de la página.
      */}
      
      {/* Sección de Tarjetas */}
      <InfoCards />
      
    </main>
  );
}