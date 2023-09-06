import {
  AiFillSave,
  AiFillDelete,
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import Button from "../UI/Button";

const Header = ({ emails, deleteItem, toggleSelectAll }) => {
  return (
    <>
      <div className="flex justify-between items-center my-4">
        <div className="flex gap-x-6">
          <input type="checkbox" onChange={toggleSelectAll} />
          <Button className="bg-green-100 border  border-green-400  rounded-md  hover:bg-green-200">
            SAVE
            <AiFillSave className="mx-2 text-green-700" />
          </Button>
          <Button className="bg-gray-100 border border-gray-600 rounded-md hover:bg-gray-200">
            MANAGE FILTERS <BiFilter className="mx-2" />
          </Button>
          <Button
            onClick={deleteItem}
            className="bg-red-100 border border-red-600 rounded-md hover:bg-red-200"
          >
            DELETE <AiFillDelete className="mx-2 text-red-700" />
          </Button>
        </div>
        <div className="flex items-center">
          <Button>
            <AiOutlineLeft />
          </Button>
          <span> 50 of 50 </span>
          <Button>
            <AiOutlineRight />
          </Button>
        </div>
      </div>
      <hr />
      <div className="my-5 flex justify-between items-center">
        <p className="text-gray-400 font-bold">Unread</p>
        <span className="bg-gray-400 rounded-3xl text-white text-sm p-1 flex items-center">
          {emails.length} <AiOutlineDown className="w-3" />
        </span>
      </div>
    </>
  );
};

export default Header;
