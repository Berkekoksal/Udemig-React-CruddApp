import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
const Card = ({ contact, handleDelete, handleEdit }) => {
  const [name, surname] = contact.name.split(" ");
  return (
    <div className="card">
      <div className="head-button">
        <button onClick={() => handleDelete(contact.id)}>
          <FaTrash />
        </button>
        <button onClick={() => handleEdit(contact)}>
          <MdEdit />
        </button>
      </div>
      <h1>
        {name[0]}
        {surname[0]}
      </h1>
      <h3>{contact.name}</h3>
      <p>{contact.position}</p>
      <p>{contact.company}</p>
      <div className="bottom">
        <p>
          <span>
            <FaPhoneSquareAlt />
          </span>
          <span>{contact.phone}</span>
        </p>
        <p>
          <span>
            <MdEmail />
          </span>
          <span>{contact.email}</span>
        </p>
      </div>
    </div>
  );
};
export default Card;
