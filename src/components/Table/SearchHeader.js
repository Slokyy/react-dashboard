import React, { useState, useEffect } from "react";
import { useGlobalState } from "../../pages/context";

// CSS
import "./SearchHeader.css";

const SearchHeader = () => {
  const [path, setPath] = useState();
  const { handleLocationPath } = useGlobalState();

  useEffect(() => {
    setPath(handleLocationPath());
  }, []);
  console.log(path);

  return (
    <div className="table-header table-section-header flex">
      {/* ==> Search Field */}
      <label htmlFor="table-search" className="search-group flex flex-center">
        <span className="icon icon-sm icon-search"></span>
        <input
          type="text"
          name="table-search"
          placeholder="Search"
          id="table-search"
          className="table-search"
        />
      </label>
      {/* ==> Add User button */}
      {path === "users" && (
        <button className="btn btn-small btn-blue add-user" id="add-user">
          Add User
        </button>
      )}
      {/* ==> Add client button */}
      {path === "clients" && (
        <button className="btn btn-small btn-blue" id="add-client">
          Add Client
        </button>
      )}
    </div>
  );
};

export default SearchHeader;
