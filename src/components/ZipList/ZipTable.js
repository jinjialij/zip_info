import Table from "react-bootstrap/Table";
import ZipCell from "./ZipCell";

const ZipTable = (props) => {
  console.log(props.data);
  return (
    <>
      <Table
        striped
        bordered
        responsive="sm"
        hover
        className="mt-3 text-center align-middle"
        size="sm"
      >
        <thead>
          <tr>
            <th>Place name</th>
            <th>Post/Zip code</th>
            <th>Google Map Link</th>
          </tr>
        </thead>
        {props.data &&
          props.data.length > 0 &&
          props.data.map((el) => (
            <ZipCell
              key={el.latitude}
              placeName={el["place name"]}
              url={`https://www.google.ca/maps/@${el.latitude},@${el.longitude},15z`}
              postcode={el["post code"]}
              latitude={el.latitude}
            />
          ))}
      </Table>
      {props.data && props.data.length === 0 && (
        <div className="container-fluid d-flex justify-content-center text-center">
          <p>--No Data--</p>
        </div>
      )}
    </>
  );
};

export default ZipTable;
