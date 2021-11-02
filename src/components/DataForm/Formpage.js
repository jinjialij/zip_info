import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Formpage = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          {props.children}
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
    </Container>
  );
};
export default Formpage;
