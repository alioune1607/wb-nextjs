'use client';
import { Card, Row, Col } from 'react-bootstrap';

export default function InfoCards() {
  const noticias = [
    { title: "Nueva aula ATECA en el IES Cura Valera", color: "#dc3545", label: "ATECA" },
    { title: "Taller de prevención contra el acoso", color: "#198754", label: "STOP BULLYING" },
    { title: "Feliz Navidad y Próspero Año Nuevo", color: "#6f42c1", label: "NAVIDAD" }
  ];

  return (
    <Row className="gy-4">
      {noticias.map((item, idx) => (
        <Col md={4} key={idx}>
          <Card className="h-100 border-0 shadow-sm">
            <Card.Header className="bg-white fw-bold pt-3" style={{ borderTop: `4px solid ${item.color}`, color: item.color }}>
              IES CURA VALERA
            </Card.Header>
            <Card.Body>
              <Card.Title className="fw-bold mb-4" style={{ color: item.color }}>{item.title}</Card.Title>
              <div className="bg-light d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <span className="text-muted fw-bold">{item.label}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}