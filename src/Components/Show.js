import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function Show() {
  // create a use state to get the student data
  const [students, setStudents] = useState([]);
  // create a fetch function to get the data from the API
  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3001/api/get");
    const data = await response.json();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <Table striped bordered hover className="my-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Class</th>
        </tr>
      </thead>
      {/* create a map function for the tbody */}
      <tbody>
        {students.map((student) => {
          return (
            <tr id={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Show;
