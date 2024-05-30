import React, { useState } from "react";
import NavBar from "../components/Navbar";
import AddUserModal from "../components/AddUserModal";
import UserTable from "../components/UserTable";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

const UserRecords = ({ setIsLoggedIn }) => {
  const [userList, setUserList] = useState([]);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [userIdForDelete, setUserIdForDelete] = useState(null);

  const handleSave = (user) => {
    setUserList((prev) => [...prev, { ...user }]);
  };
  const handleDelete = () => {
    setUserList((prev) => prev.filter((item) => item.id !== userIdForDelete));
    setShowDeleteConfirmModal(false);
  };
  const handleSort = (order, key) => {
    const sorted = [...userList].sort((a, b) => {
      if (key === "userName") {
        if (a.userName < b.userName) return order === "asc" ? -1 : 1;
        if (a.userName > b.userName) return order === "asc" ? 1 : -1;
        return 0;
      } else {
        if (a.gender < b.gender) return order === "asc" ? -1 : 1;
        if (a.gender > b.gender) return order === "asc" ? 1 : -1;
        return 0;
      }
    });
    setUserList(sorted);
  };

  return (
    <>
      <div>
        <NavBar setIsLoggedIn={setIsLoggedIn} />
        <div className="px-5">
          <div className="col d-flex justify-content-end align-items-end"></div>
          <UserTable
            userList={userList}
            setShowDeleteConfirmModal={setShowDeleteConfirmModal}
            setUserIdForDelete={setUserIdForDelete}
            handleSort={handleSort}
            setShowAddUserModal={setShowAddUserModal}
          />

          <AddUserModal
            show={showAddUserModal}
            handleClose={setShowAddUserModal}
            handleSave={handleSave}
          />

          <DeleteConfirmModal
            showDeleteConfirmModal={showDeleteConfirmModal}
            handleDelete={handleDelete}
            setShowDeleteConfirmModal={setShowDeleteConfirmModal}
          />
        </div>
      </div>
    </>
  );
};

export default UserRecords;
