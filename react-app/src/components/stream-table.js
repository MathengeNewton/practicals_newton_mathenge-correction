import Table from 'react-bootstrap/Table';

function StreamTable(props) {
    const { streams, seeModal } = props;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date  Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>  
        {streams && streams.map(stream => (
            <tr>
                <td>{stream.name}</td>
                <td>{stream.createdAt}</td>
                <td onClick={()=>seeModal(stream.id)}>View Students</td>
            </tr>
        ))} 
      </tbody>
    </Table>
  );
}

export default StreamTable;