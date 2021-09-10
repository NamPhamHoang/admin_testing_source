import React from "react";
import { Modal } from "react-bootstrap";

const CustomModal = ({
    title, 
    form, 
    show, 
    handleClose
}) => {
    return (
    <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{form}</Modal.Body>
      </Modal>
    )
}

export default CustomModal;