import uuid from "react-uuid";
import parseNestedObj from "../utils/Helper/parseNestedObj";
import visNetworkDummyData from "../data/visNetworkDummyData";
import styled from "styled-components";

const Table = (props) => {
  let data = props.data; // data is a object
  let chosenTopic = props.chosenTopic;
  let chosenProperty = props.chosenProperty;
  let bindings = data?.results?.bindings;

  if (data === null || data === undefined) {
    data = visNetworkDummyData;
  }

  const parseBinding = (binding) => {
    return (
      <tr key={uuid()}>
        <td key={uuid()}><a href={binding.parent.value}>{binding.parent.value}</a></td>
        <td key={uuid()}>{binding.parentLabel.value}</td>
        <td key={uuid()}>{binding.child.value}</td>
        <td key={uuid()}>{binding.childLabel.value}</td>
        <td key={uuid()}>{binding.grandChild.value}</td>
        <td key={uuid()}>{binding.grandChildLabel.value}</td>
      </tr>
    )
  };


  let table = null;
  if (data !== null && data !== undefined && Object.keys(data).length > 0) {
    table = (
      <table style={{display: "table"}}>
        <thead>
          <tr>
            <th>Parent URI</th>
            <th>Parent Node</th>
            <th>Child URI</th>
            <th>Child Node</th>
            <th>Grandchild URI</th>
            <th>Grandchild Node</th>
          </tr>
        </thead>
        <tbody>
          {bindings.map(binding => parseBinding(binding))}
        </tbody>
      </table>
    );
  }

  return <div className="Table">{table}</div>;
};

export default Table;
