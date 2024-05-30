import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteConfirmModal({
  showDeleteConfirmModal,
  handleDelete,
  setShowDeleteConfirmModal,
}) {
  return (
    <>
      <Modal show={showDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you want to delete the user?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteConfirmModal(false)}
          >
            Cancel
          </Button>
          <Button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteConfirmModal;
