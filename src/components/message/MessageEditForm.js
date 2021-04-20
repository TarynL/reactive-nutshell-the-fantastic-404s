import React, { useState, useEffect } from "react";
import { updatePrivateMessage, getMessagesById} from "../../modules/MessageManager";
import { useParams, useHistory} from "react-router-dom";
import {getSingleUser} from '../../modules/UserManager';

export const PrivateMessageEditForm = () => {
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { messageId } = useParams();
  const history = useHistory();

  const [recipient, setRecipient] = useState([]);



  const handleFieldChange = (event) => {
    const stateToChange = { ...message };
    let editedVal = event.target.value;

    if (event.target.id.includes("Id")) {
      editedVal = parseInt(editedVal);
    }

    stateToChange[event.target.id] = editedVal;
    setMessage(stateToChange);
  };

  const updateExistingMessage = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const editedMessage = {
      id: message.id,
      senderId: parseInt(sessionStorage.getItem("nutshell_user")),
      userId: message.userId,
      message: message.message,
      timestamp: message.timestamp
    };
console.log(editedMessage)
    updatePrivateMessage(editedMessage)
    .then(() => history.push("/messages"));
  };

  useEffect(() => {
    getMessagesById(messageId)
    .then((message) => {
      setMessage(message);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getSingleUser(message.userId)
    .then(user => {
        setRecipient(user)
    }, []);
})

  return (
    <>
      <form>
      <h3>Sent to: {recipient.name}</h3>
        <fieldset>
          <div className="formgrid">
            <label htmlFor="message">Message:</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={handleFieldChange}
                id="message"
                value={message.message}
              />
              </div>

          <div className="buttonBox">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingMessage}
              className="button">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}