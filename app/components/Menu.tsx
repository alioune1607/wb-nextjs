'use client';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function Menu() {
  return (
    <div className="position-relative w-100" style={{ height: '550px' }}>
      {/* 1. IMAGEN DE FONDO (Cubre todo el componente) */}
      <Image
        src="/hero.jpeg"
        alt="Fondo IES Cura Valera"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center top' }}
        priority
        className="z-0"
      />

      {/* 2. CAPA DE DEGRADADO BLANCO (Para que se lea el texto de arriba) */}
      <div 
        className="position-absolute top-0 start-0 w-100 z-0" 
        style={{ 
          height: '200px', 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)' 
        }}
      ></div>

      {/* 3. CONTENIDO SUPERIOR (Logo y Títulos) */}
      <div className="position-relative z-1 pt-4 pb-5">
        <Container>
          <Row className="align-items-center">
            {/* Logo y Texto */}
            <Col md={9} className="d-flex align-items-center">
              {/* Logo */}
              <div className="me-4">
                <Image 
                  src="/logo.png" 
                  alt="Escudo" 
                  width={85} 
                  height={85} 
                  style={{ objectFit: 'contain' }}
                />
              </div>
              
              {/* Texto del Instituto */}
              <div className="border-start border-secondary ps-4 border-2">
                <h1 className="h3 mb-0 fw-bold text-dark" style={{ fontFamily: 'serif', letterSpacing: '1px' }}>
                  IES CURA VALERA, HUÉRCAL-OVERA
                </h1>
                <p className="mb-0 text-primary small text-uppercase fw-semibold">
                  Junta de Andalucía
                </p>
              </div>
            </Col>

            {/* Buscador (Derecha) */}
            <Col md={3} className="text-end d-none d-md-block">
               <span className="fw-bold text-uppercase small" style={{ cursor: 'pointer', letterSpacing: '1px' }}>
                 🔍 Search
               </span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. BARRA DE NAVEGACIÓN (Caja blanca flotante) */}
      <div className="position-relative z-1 mt-4">
        <Container>
          <Navbar className="bg-white rounded-3 shadow-sm py-3 px-4 border border-1 border-light">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="w-100 justify-content-between text-uppercase fw-bold" style={{ fontSize: '1rem', color: '#c0392b' }}>
                
                <Nav.Link as={Link} href="/" className="d-flex align-items-center" style={{ color: '#c0392b' }}>
                  Inicio
                </Nav.Link>
                <span className="text-secondary align-self-center mx-2 fs-5">⊕</span>

                <Nav.Link as={Link} href="/noticias" className="d-flex align-items-center" style={{ color: '#c0392b' }}>
                  Noticias
                </Nav.Link>
                <span className="text-secondary align-self-center mx-2 fs-5">⊕</span>

                <Nav.Link as={Link} href="/oferta" className="d-flex align-items-center" style={{ color: '#c0392b' }}>
                  Oferta Educativa
                </Nav.Link>
                <span className="text-secondary align-self-center mx-2 fs-5">⊕</span>

                <Nav.Link as={Link} href="/biblioteca" className="d-flex align-items-center" style={{ color: '#c0392b' }}>
                  Biblioteca Escolar
                </Nav.Link>
                <span className="text-secondary align-self-center mx-2 fs-5">⊕</span>

                <Nav.Link as={Link} href="/contacto" className="d-flex align-items-center" style={{ color: '#c0392b' }}>
                  Contacto
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
}