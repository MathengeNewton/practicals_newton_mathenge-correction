import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function EditStudentModal(props) {
    const { confirmEdit, editModal, editObject,setEditModal, handleEditModal, streams } = props;

  const handleClose = () => setEditModal(false);

  return (
    <>     
        <Modal
            show={editModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Edit Student</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={editObject.name} onChange={handleEditModal} placeholder="Name" required/>
                </Form.Group> 
                <Form.Group className="mb-3">
                <Form.Label>Streams</Form.Label>
                    <Form.Select name="stream" onChange={handleEditModal}>
                    {streams && streams.map(stream =>(
                        <option value={stream.id}>{stream.name}</option>
                    ))}
                    </Form.Select>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={confirmEdit}>
                Confirm
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default EditStudentModal