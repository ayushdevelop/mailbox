import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="nav">
      <div id="logo">
        <Link to="/" className="navlink">
          Mail<span>Box</span>
        </Link>
      </div>
      <div id="searchBox">
        <SearchBar />
      </div>
    </div>
  );
}

export default Navbar;
