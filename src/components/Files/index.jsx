import { IoFolderOpenOutline } from "react-icons/io5";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineDelete } from "react-icons/md";

import {
  FileRowContainer,
  FolderIcon,
  Name,
  SizeContainer,
  Size,
  LastModifiedContainer,
  Modified,
  DeleteButton
 
  } from './StyledComponents'
  
  const Files = props => {
    const {fileDetails,onDelete} = props
    const {name, size, modified} = fileDetails
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    const handleDelete = () => {
      onDelete(fileDetails.id);
    };
   
    return (
      
      <FileRowContainer>
      <FolderIcon>
       <IoFolderOpenOutline/>
        <Name>{name}</Name>
      </FolderIcon>
      <SizeContainer>
        <Size>{size}</Size>
      </SizeContainer>
      <LastModifiedContainer>
        <Modified>{modified}</Modified>
      </LastModifiedContainer>
       
      <DeleteButton onClick={handleShow}>
      <MdOutlineDelete/>
      </DeleteButton>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deleting this item is irreversible. Confirm whether you want to permanently delete this file or not.
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>Confirm Delete</Button>
        </Modal.Footer>
      </Modal>

    </FileRowContainer>
  )
}
    
    
  
  
  export default Files
  