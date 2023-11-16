/* eslint-disable react/prop-types */
import { StudentDiv } from "./styles";
const Student = ({ name, matricNo }) => {
  return (
    <StudentDiv>
      <h3>{name}</h3>
      <h4>{matricNo}</h4>
    </StudentDiv>
  );
};

export default Student;
