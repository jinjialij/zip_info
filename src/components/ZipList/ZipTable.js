import Table from "react-bootstrap/Table";
const ZipTable = (props) => {
  return (
    <>
      <Table
        striped
        bordered
        responsive="lg"
        className="mt-3 text-center align-middle"
      >
        <thead>
          <tr>
            <th></th>
            <th>Place name</th>
            <th>Post/Zip code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>H</td>
            <td>B3H</td>
          </tr>
        </tbody>
      </Table>
      {/* {props.ducks && props.ducks.length === 0 && (
        <div className="container-fluid d-flex justify-content-center text-center">
          <p>--No Data--</p>
        </div>
      )} */}
    </>
  );
};

export default ZipTable;
