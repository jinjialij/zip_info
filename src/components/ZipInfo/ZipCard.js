import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

const ZipCard = (props) => {
  let url;
  if (props.info.lat) {
    url = `https://www.google.ca/maps/@${props.info.lat},@${props.info.long},15z`;
  }

  return (
    <Card style={{ width: "100%" }}>
      <Card.Header className="mb-2 text-center fs-2 fw-bold">
        Zip Info
      </Card.Header>
      <Card.Body className="mb-2 text-center">
        <ListGroup variant="flush">
          <ListGroup.Item>Country: {props.info.country}</ListGroup.Item>
          <ListGroup.Item>State: {props.info.state}</ListGroup.Item>
          <ListGroup.Item>Post Code: {props.info.postcode}</ListGroup.Item>
          <ListGroup.Item>Place Name: {props.info.placeName}</ListGroup.Item>
        </ListGroup>
        <Card.Link href={url}>View on Google Map</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ZipCard;
