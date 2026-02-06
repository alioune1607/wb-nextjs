'use client';
import { Card, Row, Col, Button } from 'react-bootstrap'; // Añadimos Button
import Link from 'next/link'; // Importamos Link

export default function InfoCards() {
  // Añadimos un 'id' a cada noticia para la ruta
  const noticias = [
    { 
      id: "ateca", // Identificador único
      title: "Nueva aula ATECA en el IES Cura Valera", 
      color: "#dc3545", 
      label: "ATECA" 
    },
    { 
      id: "bullying", 
      title: "Taller de prevención contra el acoso", 
      color: "#198754", 
      label: "STOP BULLYING" 
    },
    { 
      id: "navidad", 
      title: "Feliz Navidad y Próspero Año Nuevo", 
      color: "#6f42c1", 
      label: "NAVIDAD" 
    }
  ];

  return (
    <Row className="gy-4">
      {noticias.map((item, idx) => (
        <Col md={4} key={idx}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Header className="bg-white fw-bold pt-3" style={{ borderTop: `4px solid ${item.color}`, color: item.color }}>
              IES CURA VALERA
            </Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="fw-bold mb-4" style={{ color: item.color }}>{item.title}</Card.Title>
              
              <div className="bg-light d-flex align-items-center justify-content-center mb-3 flex-grow-1" style={{ height: '180px' }}>
                <span className="text-muted fw-bold">{item.label}</span>
              </div>

              {/* --- NUEVO BOTÓN "VER DETALLE" --- */}
              <Link href={`/noticias/${item.id}`} passHref legacyBehavior>
                 <Button variant="outline-dark" className="w-100 mt-auto">Ver detalle</Button>
              </Link>
              {/* ---------------------------------- */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}