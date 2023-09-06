import Accordion from "./Components/Accordion";
import Header from "./Components/Header";
import { data } from "../data/data";
import { useState } from "react";

function App() {
  const [emails, setEmail] = useState(data);
  const [selectAllChecked, setSelectAllChecked] = useState(false);

  const toggleSelectAll = () => {
    const newSelectAllChecked = !selectAllChecked;
    setSelectAllChecked(newSelectAllChecked);

    // Update the state of individual checkboxes
    const newEmails = emails.map((email) => ({
      ...email,
      isChecked: newSelectAllChecked,
    }));
    setEmail(newEmails);
  };

  const checkBoxHandler = (id) => {
    const newEmails = emails.map((email) => {
      if (email.id === id) {
        return { ...email, isChecked: !email.isChecked };
      }
      return email;
    });

    const allChecked = newEmails.every((email) => email.isChecked);
    setSelectAllChecked(allChecked);

    setEmail(newEmails);
  };

  // delete item when checkbox is checked
  const deleteItem = () => {
    const newEmails = emails.filter((email) => !email.isChecked);
    setEmail(newEmails);
  };

  // delete item when delete button is clicked

  return (
    <>
      <div className="container mx-auto">
        <Header
          emails={emails}
          deleteItem={deleteItem}
          toggleSelectAll={toggleSelectAll}
        />
        {emails.map((email) => {
          return (
            <Accordion
              key={email.id}
              email={email}
              checkBoxHandler={checkBoxHandler}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
