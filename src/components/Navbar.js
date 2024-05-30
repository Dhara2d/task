import Navbar from "react-bootstrap/Navbar";
import { BoxArrowInUp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function NavBar({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
  };
  return (
    <Navbar bg="primary" data-bs-theme="dark" className="px-5">
      <Navbar.Brand href="#home">User Records</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Welcome, <i>Admin</i> <BoxArrowInUp onClick={handleLogout} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
