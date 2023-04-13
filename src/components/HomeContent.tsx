import { useState } from "react";
import Style from "./HomeContent.module.css";
import BasicForm from "./BasicForm";
import AdvancedForm from "./AdvancedForm";
import TableComponent from "./TableComponent";

function HomeContent() {
  const [view, setView] = useState("basic");
  const [users, setUsers] = useState([]);
  console.log(users)

  return (
    <>
      <img src="/assets/homepage.jpg" alt="Homepage image" height="919px" />

      <nav className={Style.tabs}>
        <h3
          onClick={() => setView("basic")}
          style={{ color: view === "basic" ? "rgb(127, 63, 146)" : "" }}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          style={{ color: view === "advanced" ? "rgb(127, 63, 146)" : "" }}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicForm setUsers={setUsers} users={users} /> : <AdvancedForm />}
      
      {/* // Rendering Data submitted from the form
      <div>
        <ul>
        {users &&
        users.map((user) => (
          <li>
            {`Email: ${user.email}, Age:${user.age}`}
          </li>
        ))}
        </ul>
      </div> */}
      <br />
      <br />
       {/* Rendering Data submitted from the form (as a table)       */}
      {users.length != 0 && <TableComponent users={users}/>}
      <br />
      <br />      
    </>
  );
}

export default HomeContent;
