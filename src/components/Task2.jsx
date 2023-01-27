//fetching data from API and Display id,name,username and email.

import React, { useEffect, useState } from "react";
import axios from "axios";



const Task_2 = () => {
  
  const [users, setUsers] = useState([]);
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((response) => {
        setUsers(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  const table_ = { borderCollapse: "collapse", width: "100%" }
  const th_ = { border: "1px solid #ddd", padding: "8px", color: "white", backgroundColor: "blue" }
  const td_ = { border: "1px solid #ddd", padding: "8px" }
  const tr_ = { backgroundColor: "#f2f2f2" }
  const centerEle = { display: "flex", justifyContent: "center", alignItems: "center" }


  return (

    <div>
      <h2 style={centerEle}>Displaying Data from API</h2><br />
      <p style={centerEle}>Task 2:Use below api and display id , name , username and email in table GET https://jsonplaceholder.typicode.com/users...</p><br />
      <table style={table_}>
        <tr style={{ backgroundColor: "f2f2f2" }}>
          <th style={th_}>ID</th>
          <th style={th_}>NAME</th>
          <th style={th_}>USERNAME</th>
          <th style={th_}>EMAIL</th>
        </tr>

        {users.length > 0 &&
          users.map((user) => {
            return (
              <>
                <tr key={user.id} style={tr_} >
                  <td style={td_}>{user.id}</td>
                  <td style={td_}>{user.name}</td>
                  <td style={td_}>{user.username}</td>
                  <td style={td_}>{user.email}</td>
                </tr>
              </>
            );
          })}
      </table>
    </div>
  );
};

export default Task_2;

