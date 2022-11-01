import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Card from './components/card';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Header titulo="Galería de Imágenes con React"  />
      <Container>
        <Row>
          <Col>
            <Card imagen="https://placedog.net/509" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>

          <Col>
            <Card imagen="https://placedog.net/502" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/501" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card imagen="https://placedog.net/503" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>

          <Col>
            <Card imagen="https://placedog.net/504" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/505" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Card imagen="https://placedog.net/506" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>

          <Col>
            <Card imagen="https://placedog.net/507" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
          <Col>
            <Card imagen="https://placedog.net/508" titulo="Perro en adopción" descripcion="Se Regala Hermoso perro que busca un hogar donde lo cuiden y querían mucho" />
          </Col>
        </Row>

      </Container>
      <Footer />
    </div>
  );
}

export default App;
