import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";

const ListCard = (props) => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Zip Info</Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush" className="mb-2">
            <ListGroup.Item>Country: {props.data.country}</ListGroup.Item>
            <ListGroup.Item>State: {props.data.state}</ListGroup.Item>
            <ListGroup.Item>Place Name: {props.data.placeName}</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ListCard;
