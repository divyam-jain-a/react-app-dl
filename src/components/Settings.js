import React, { useState, useEffect } from "react";
import AddUserForm from "./AddUserForm";
import "../style/Settings.css";

const getLocalStorage = () => {
  const lists = localStorage.getItem("myuserlist");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

const Settings = () => {
  const [addButton, setAddButton] = useState(false);
  const [showSuccess, setShowSuccess] = useState();
  const [usersList, setUserList] = useState(getLocalStorage());
  let sno = 0;

  const addUserHandler = () => {
    setAddButton(true);
  };

  const cancellingForm = (mydata) => setAddButton(mydata);

  const displaySuccessMsg = (mydata) => {
    setAddButton(mydata);
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const allUsers = (item) => {
    setUserList([...usersList, item]);
  };

  const deleteUser=(index)=>{
    const editedList = usersList.filter((item)=>item.id !== index);
    setUserList(editedList);
  }

  useEffect(() => {
    localStorage.setItem("myuserlist", JSON.stringify(usersList));
  }, [usersList]);

  return (
    <>
      <div className="settings-box">
        {showSuccess && (
          <div className="success-msg">
            <span className="material-symbols-rounded">done</span>
            <p> User added successfully !</p>
          </div>
        )}
        <button onClick={addUserHandler} className="add-user-btn">
          + Add User{" "}
        </button>
        {addButton && (
          <AddUserForm
            myListItems={allUsers}
            returnBack={displaySuccessMsg}
            cancelTheForm={cancellingForm}
          />
        )}
        <div>
          <table><tbody>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Last Signed In</th>
                <th>Role</th>
                <th>Delete</th>
              </tr>
              {usersList.length===0?(<tr><td className="no-user" colSpan={5}>No User Added...</td></tr>)
              :(usersList.map((user) => (
                <tr key={user.id}>
                  <td className="sno-cell">{++sno}</td>
                  <td className="name-cell">{user.name}</td>
                  <td>{user.lastSignedIn}</td>
                  <td>{user.role}</td>
                  <td className="delete-btn">
                    <button onClick={()=>{deleteUser(user.id)}} className="material-symbols-outlined">cancel</button>
                  </td>
                </tr>)))}
            </tbody></table>
        </div>
      </div>
    </>
  );
};

export default Settings;
