import ListCard from "./ListCard";
import ZipTable from "./ZipTable";

const ZipList = (props) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
      <ListCard data={props.data}></ListCard>
      <ZipTable className="container-fluid" data={props.data.places}></ZipTable>
      <div className="my-2 container-fluid d-flex justify-content-center text-center">
        <button className="btn btn-primary" type="button" onClick={refreshPage}>
          Reset
        </button>
      </div>
    </>
  );
};

export default ZipList;
