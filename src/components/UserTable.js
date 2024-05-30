import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const UserTable = ({
  userList,
  setUserIdForDelete,
  setShowDeleteConfirmModal,
  handleSort,
  setShowAddUserModal,
}) => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [genderSortOrder, setGenderSortOrder] = useState("asc");
  const [filteredUserList, setFilteredUserList] = useState(userList);
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (query) => {
    if (!query) {
      setFilteredUserList(userList);
    } else {
      const filtered = [...filteredUserList].filter(
        (user) =>
          user.userName.toLowerCase().includes(query.toLowerCase()) ||
          user.mobileNumber.includes(query.toLowerCase())
      );
      setFilteredUserList(filtered);
    }
  };

  useEffect(() => {
    setFilteredUserList(userList);
  }, [userList]);

  return (
    <div className="p-5">
      <div className="d-flex justify-content-between mb-3">
        <input
          type="text"
          onChange={(e) => {
            setSearchVal(e.target.value);
            handleSearch(e.target.value);
          }}
          value={searchVal}
          placeholder="Search by Name or Mobile Number"
        />
        <Button
          variant="primary"
          onClick={() => setShowAddUserModal((prev) => !prev)}
        >
          Add User
        </Button>
      </div>
      <Table responsive>
        <thead>
          <tr>
            <th>S.No</th>
            <th
              onClick={() => {
                const newOrder = sortOrder === "asc" ? "desc" : "asc";
                setSortOrder(newOrder);
                handleSort(newOrder, "userName");
              }}
            >
              Name
              {sortOrder === "asc" ? (
                <ChevronUp fontSize={12} color="black" className="mx-1" />
              ) : (
                <ChevronDown fontSize={12} color="black" className="mx-1" />
              )}
            </th>
            <th
              onClick={() => {
                const newOrder = genderSortOrder === "asc" ? "desc" : "asc";
                setGenderSortOrder(newOrder);
                handleSort(newOrder, "gender");
              }}
            >
              Gender
              {genderSortOrder === "asc" ? (
                <ChevronUp fontSize={12} color="black" className="mx-1" />
              ) : (
                <ChevronDown fontSize={12} color="black" className="mx-1" />
              )}
            </th>
            <th>Age</th>
            <th>Mobile Number</th>
            <th>Company Name</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredUserList.length > 0 ? (
            filteredUserList.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.userName}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>{user.mobileNumber}</td>
                <td>{user.companyName}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      setUserIdForDelete(user.id);
                      setShowDeleteConfirmModal(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr style={{ textAlign: "center" }}>
              <td colSpan={7}>No Records Found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
