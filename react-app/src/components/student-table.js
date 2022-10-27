import Table from 'react-bootstrap/Table';

function StudentTable(props) {
    const { students, setDeleteId, setDeleteModal, setEditModal,streams, setEditObect  } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Stream</th>
          <th>Date Joined</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>  
        {students && students.map(student => (
            <tr>
                <td>{student.name}</td>
                <td>{streams && streams.map(val=> val.id === student.stream ? val.name : null)}</td>
                <td>{student.createdAt}</td>
                <td onClick={()=>{
                  setEditModal(true)
                  setEditObect(student)
                }}>Edit Student</td>
                <td onClick={()=>{
                  setDeleteId(student.id);
                  setDeleteModal(true);
                }}>delete Student</td>
            </tr>
        ))} 
      </tbody>
    </Table>
  );
}

export default StudentTable;