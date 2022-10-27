import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function StreamsModal(props) {
    const { studentData, show, setShow } = props;
    console.log(studentData)

  const handleClose = () => setShow(false);

  return (
    <>
     
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Students</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup variant="flush">
            {studentData && studentData.map(student=>(
                <ListGroup.Item>{student.name}</ListGroup.Item>
            ))}
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StreamsModal