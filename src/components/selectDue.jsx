import { SelectDiv } from "./styles";
import { Link } from "react-router-dom";
const SelectDue = () => {
  return (
    <SelectDiv>
      <h2>Select the due you wish to pay below</h2>
      <ul>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/collegedue"
        >
          <li>College Due</li>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/deptdue"
        >
          <li>Deparmental Due</li>
        </Link>
      </ul>
    </SelectDiv>
  );
};

export default SelectDue;
