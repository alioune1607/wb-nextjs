'use client';
import { Container, Row, Col, Nav } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 pt-5">
      <Container>
        <Row>
          {/* Calendario Enero 2026 */}
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase border-bottom pb-2 mb-3">Calendario</h5>
            <p className="small mb-1">ENERO 2026</p>
            <table className="table table-dark table-sm table-borderless text-center small" style={{maxWidth:'250px'}}>
              <thead><tr className="text-muted"><th>L</th><th>M</th><th>X</th><th>J</th><th>V</th><th>S</th><th>D</th></tr></thead>
              <tbody>
                <tr><td></td><td></td><td></td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
                <tr><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr>
                <tr><td>12</td><td>13</td><td>14</td><td className="fw-bold text-white">15</td><td>16</td><td>17</td><td>18</td></tr>
                <tr><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td></tr>
                <tr><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td></tr>
              </tbody>
            </table>
          </Col>

          {/* Encuéntranos en... */}
          <Col md={6} className="mb-4">
            <h5 className="text-uppercase border-bottom pb-2 mb-3">Encuéntranos en..</h5>
            <p className="small mb-1 fw-bold">DIRECCIÓN POSTAL:</p>
            <p className="small text-secondary">Avda. Guillermo Reyna, 35. 04600 HUÉRCAL-OVERA</p>
            <p className="small mb-1 fw-bold">EMAIL:</p>
            <p className="small text-secondary">04002714.edu@juntadeandalucia.es</p>
          </Col>
        </Row>
      </Container>

      {/* Menú inferior */}
      <div className="py-3 border-top border-secondary mt-3" style={{ backgroundColor: '#111' }}>
        <Container>
          <Nav className="small fw-bold">
            <Nav.Link href="#" className="text-white ps-0">INICIO</Nav.Link>
            <Nav.Link href="#" className="text-white">NOTICIAS</Nav.Link>
            <Nav.Link href="#" className="text-white">OFERTA EDUCATIVA</Nav.Link>
            <Nav.Link href="#" className="text-white">CONTACTO</Nav.Link>
          </Nav>
        </Container>
      </div>
    </footer>
  );
}