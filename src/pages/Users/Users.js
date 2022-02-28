import React, { useState, useEffect } from "react";
import { useGlobalState } from "../context";
import Table from "../../components/Table/Table";
import SearchHeader from "../../components/Table/SearchHeader";
import AddUser from "../../components/Sliders/AddUser";

const url = "http://localhost:8000/users";

const Users = () => {
  // const [users, setUsers] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  const { data, setData, isLoading, setIsLoading, fetchUsers } =
    useGlobalState();

  useEffect(() => {
    fetchUsers(url);
  }, []);

  return (
    <section className="section">
      <SearchHeader />
      {isLoading && <div>Loading....</div>}
      {!data && !isLoading && <div>Prazna tabela.....</div>}
      {data && <Table />}
      {data && <AddUser />}
    </section>
  );
};

export default Users;
