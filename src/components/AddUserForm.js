import React, { useState } from "react";
import "../style/AddUserForm.css";
import myimg from "../Online-Users-circle.jpg";

const AddUserForm = (props) => {
  const [displayForm, setDisplayForm] = useState();
  const [inputName, setInputName] = useState("");
  const [inputRole, setInputRole] = useState("");

  const addName = (event) => setInputName(event.target.value);
  const addRole = (event) => setInputRole(event.target.value);

  const addUserHandler = (event) => {
    event.preventDefault();
    const inputswithId = {
      id: Math.random().toString(),
      name: inputName,
      lastSignedIn: new Date().toDateString(),
      role: inputRole,
    };

    setInputName("");
    setInputRole("");
    setDisplayForm(false);
    props.returnBack(displayForm);
    props.myListItems(inputswithId);
  };

  const cancelHandler = () => {
    setDisplayForm(false);
    props.cancelTheForm(displayForm);
  };

  return (
    <>
      <div className="form-bg">
        <div className="form">
          <img src={myimg} alt="" />
          <form onSubmit={addUserHandler} className="form-desc">
            <p>User Information</p>
            <br />
            <label htmlFor="">Name/Email Id of User</label>
            <br />
            <input value={inputName} onChange={addName} required type="text" name="" id=""/>
            <br />
            <br />
            <label htmlFor="">Role</label>
            <br />
            <select value={inputRole} onChange={addRole} required name="" id="">
              <option value hidden></option>
              <option value="Owner">Owner</option>
              <option value="Admin">Admin</option>
              <option value="Sales">Sales</option>
            </select>
            <br />
            <button onClick={cancelHandler}>Cancel</button>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUserForm;
