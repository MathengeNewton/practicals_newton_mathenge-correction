import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';


function ConfirmDeleteModal(props) {
    const { confirmDelete, deleteModal, setDeleteModal } = props;

  const handleClose = () => setDeleteModal(false);

  return (
    <>     
        <Modal
            show={deleteModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>Students</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ListGroup variant="flush">
            Confirm Delete Student?
            </ListGroup>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={confirmDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default ConfirmDeleteModal