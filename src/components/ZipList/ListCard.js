import Card from "react-bootstrap/Card";
const ListCard = (props) => {
  console.log(props);
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header className="mb-2 text-center">Zip Info</Card.Header>
      <Card.Body className="mb-2 text-center">
        <Card.Text>Country: {props.data.country}</Card.Text>
        <Card.Text>State: {props.data.state}</Card.Text>
        <Card.Text>Place Name:</Card.Text>
        <Card.Text>{props.data.placeName}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ListCard;
