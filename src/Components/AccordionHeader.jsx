import { PiDotsSixVerticalBold } from "react-icons/pi";
import { AiOutlineDown, AiOutlineClockCircle } from "react-icons/ai";
import { CgAttachment } from "react-icons/cg";
import AccordionContent from "./AccordionContent";
import BadgeTag from "./badge";
import { useState } from "react";

const AccordionHeader = ({ email, checkBoxHandler }) => {
  const [isOpen, setIsOpen] = useState(false);

  const parsedDate = new Date(email.date);
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const month = parsedDate.toLocaleString("default", { month: "short" });
  const year = parsedDate.getFullYear(email.date);
  const randomNum = Math.floor(Math.random() * 10 + 1);
  const formattedDate = `${month} ${day}, ${year}`;
  const tags = email.tags.split(", ");

  const name = email.sender_name;
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

  const openHandler = (id) => {
    if (id === email.id) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(true);
    }
  };

  const handleCheckBox = () => {
    checkBoxHandler(email.id);
  };

  return (
    <div
      onClick={() => openHandler(email.id)}
      className="rounded-md border p-3 my-5 hover:bg-gray-100 cursor-pointer"
    >
      <div className="flex items-center justify-between px-1 py-2 ">
        <div className="grid grid-flow-col place-items-center gap-[15px]">
          <div>
            <PiDotsSixVerticalBold />
          </div>
          <input
            type="checkbox"
            checked={email.isChecked}
            onChange={handleCheckBox}
          />
          <div className="h-4 w-4 rounded-full border bg-green-500"></div>
          <div className="flex flex-col items-center rounded-lg border-2 px-3 py-1">
            <h1 className="text-base font-bold">{day}</h1>
            <p className="text-[10px]">{month}</p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-[50%] bg-gray-500 text-sm text-white">
            <p className="p-2">{initials}</p>
          </div>
          <div>
            <h1 className="text-[22px]">
              <strong>{email.subject}</strong>
            </h1>
            <div className="flex gap-2 leading-3 items-center">
              <span>
                <strong>{email.sender_name}</strong>
              </span>
              <p className="text-gray-400">{`<${email.sender_email}>`}</p>
              <span className="text-gray-400">{formattedDate} at 3:41 PM</span>
              <span className="flex items-center text-cyan-400 ">
                <CgAttachment className="text-cyan-400" />
                {randomNum}
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col items-center gap-2">
          <div className="flex flex-wrap  gap-2 mr-3 justify-end w-28">
            {!isOpen && (
              <>
                <BadgeTag>{tags[0]}</BadgeTag>
                <BadgeTag>{tags[1]}</BadgeTag>
                <BadgeTag>{tags.length - 2}+</BadgeTag>
              </>
            )}
          </div>
          <span className="flex items-center text-yellow-400 bg-yellow-50 p-1 rounded-md">
            <AiOutlineClockCircle /> 1min
          </span>
          <p>
            <AiOutlineDown />
          </p>
        </div>
      </div>
      <AccordionContent isOpen={isOpen} email={email} />
    </div>
  );
};

export default AccordionHeader;
