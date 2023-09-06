import AccordionHeader from "./AccordionHeader";

const Accordion = ({ email, checkBoxHandler }) => {
  return (
    <>
      <AccordionHeader email={email} checkBoxHandler={checkBoxHandler} />
    </>
  );
};

export default Accordion;
