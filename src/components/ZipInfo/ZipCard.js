import Card from "react-bootstrap/Card";
const ZipCard = (props) => {
  let url;
  if (props.info.lat) {
    url = `https://www.google.ca/maps/@${props.info.lat},@${props.info.long},15z`;
  }

  return (
    <Card style={{ width: "100%" }}>
      <Card.Header className="mb-2 text-center">Zip Info</Card.Header>
      <Card.Body className="mb-2 text-center">
        <Card.Text>Country: {props.info.country}</Card.Text>
        <Card.Text>State: {props.info.state}</Card.Text>
        <Card.Text>Post Code: {props.info.postcode}</Card.Text>
        <Card.Text>Place Name:</Card.Text>
        <Card.Text>{props.info.placeName}</Card.Text>
        <Card.Link href={url}>View on Google Map</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ZipCard;
