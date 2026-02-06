import Link from "next/link";
import Image from "next/image";

// Preparamos los datos "hardcodeados" (sin API, como pide el nivel estudiante)
// Nota: En una app real esto vendría de una base de datos
const datosNoticias: Record<string, { titulo: string; texto: string; img: string }> = {
  ateca: {
    titulo: "Nueva aula ATECA",
    texto: "El IES Cura Valera inaugura su nueva aula de tecnología aplicada con equipamiento de última generación para los ciclos formativos.",
    img: "/hero.jpeg" // Reusamos la imagen que ya tienes
  },
  bullying: {
    titulo: "Lucha contra el acoso",
    texto: "Jornadas de concienciación para alumnos y profesores sobre la importancia de la convivencia escolar y el respeto mutuo.",
    img: "/hero.jpeg"
  },
  navidad: {
    titulo: "Celebración de Navidad",
    texto: "El instituto os desea unas felices fiestas y un próspero año nuevo cargado de aprobados.",
    img: "/hero.jpeg"
  }
};

// Necesitamos 'await params' porque en las nuevas versiones de Next.js params es una promesa
export default async function DetalleNoticia({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params; // Esperamos a que se resuelvan los parámetros
  const id = resolvedParams.id;
  const noticia = datosNoticias[id];

  // Si NO existe la noticia (ej: /noticias/inventado), mostramos el error 404
  if (!noticia) {
    return (
      <div className="container py-5 text-center mt-5">
        <div className="alert alert-danger shadow-sm p-5" role="alert">
          <h1 className="display-4 fw-bold text-danger">NADA QUE MOSTRAR</h1>
          <p className="lead">La noticia que buscas no existe.</p>
          
          {/* Imagen 404 requerida en el examen */}
          <div className="my-4 d-flex justify-content-center">
             {/* Asegúrate de tener una imagen 404.png en public, o usa una placeholder */}
             <div style={{width: 200, height: 200, background: '#eee', borderRadius: '50%', display:'flex', alignItems:'center', justifyContent:'center'}}>
                <span className="fs-1">404</span>
             </div>
          </div>

          <Link href="/" className="btn btn-dark btn-lg mt-3">
            Volver a Inicio
          </Link>
        </div>
      </div>
    );
  }

  // Si SÍ existe, mostramos el diseño tipo "Modal"
  return (
    <div className="container py-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      {/* Simulamos una ventana modal con una Card grande y sombra */}
      <div className="card shadow-lg border-0" style={{ maxWidth: '800px', width: '100%' }}>
        <div className="position-relative" style={{ height: '300px' }}>
          <Image 
            src={noticia.img} 
            alt={noticia.titulo}
            fill
            style={{ objectFit: 'cover' }}
            className="card-img-top"
          />
        </div>
        <div className="card-body p-5 text-center">
          <h1 className="card-title fw-bold text-primary mb-4">{noticia.titulo}</h1>
          <p className="card-text lead text-muted mb-5">
            {noticia.texto}
          </p>
          
          {/* Botón para volver a inicio requerido */}
          <Link href="/" className="btn btn-outline-primary btn-lg px-5">
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}