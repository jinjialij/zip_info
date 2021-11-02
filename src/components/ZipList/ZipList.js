import ListCard from "./ListCard";
import ZipTable from "./ZipTable";
const ZipList = (props) => {
  return (
    <>
      <ListCard data={props.data}></ListCard>
      <ZipTable data={props.data.places}></ZipTable>
    </>
  );
};

export default ZipList;
