import "./SearchBox.css";
import { filteredBySearch } from "../actions";
import { connect } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const [query, setQuery] = useState("");

  function handleChange(event) {
    setQuery(event.target.value);
  }
  return (
    <div>
      <form
        id="searchBar"
        onSubmit={(e) => {
          e.preventDefault();
          props.filteredBySearch(props.originalEmailList, query);
          query = " ";
        }}>
        <input
          id="search"
          type="search"
          placeholder="search for an email.."
          onChange={(e) => handleChange(e)}
          value={query}
        />
        <Link to="/search">
          <input
            type="button"
            value="search"
            onClick={() => {
              props.filteredBySearch(props.originalEmailList, query);
              query = " ";
            }}
          />
        </Link>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    originalEmailList: state.emailList.originalEmailList,
  };
};

export default connect(mapStateToProps, { filteredBySearch })(SearchBar);
