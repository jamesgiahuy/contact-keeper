import React, { useContext } from "react";
import { PROFESSIONAL } from "../../configs/constants";
import contactContext from "../../contexts/ContactContext/ContactContext";

const ContactCard = (props) => {
  const { contact } = props;

  const { onDeleteCard, onEditHandle } = useContext(contactContext);

  const { name, phone, type, email, id } = contact;

  const typeClassName =
    type === PROFESSIONAL ? "badge bg-danger" : "badge bg-success";
  return (
    <div>
      <div className="card mb-3" style={{ width: "80%" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
          <p className="card-text">{phone}</p>
          <p className={typeClassName}>{type}</p>
          <button
            type="button"
            className="btn btn-dark my"
            onClick={() => onEditHandle(id)}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteCard(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
