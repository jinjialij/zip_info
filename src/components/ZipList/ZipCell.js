const ZipCell = (props) => {
  return (
    <tbody key={props.latitude}>
      <tr>
        <td>{props.placeName}</td>
        <td>{props.postcode}</td>

        <td>
          <a href={props.url}>Map Link</a>
        </td>
      </tr>
    </tbody>
  );
};
export default ZipCell;
