import React, { useState, useEffect } from "react";
import { updatePublicMessage, getMessagesById} from "../../modules/MessageManager";
import { useParams, useHistory} from "react-router-dom";

export const PublicMessageEditForm = () => {
  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { messageId } = useParams();
  const history = useHistory();

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

    // const loggedinuser = parseInt(sessionStorage.getItem("nutshell_user"))
    const editedMessage = {
      id: messageId,
      userId: message.userId,
      // receiverID: message.loggedinuser,
      message: message.message,
      currentTime: message.currentTime
    };

    updatePublicMessage(editedMessage)
    .then(() => history.push("/"));
  };

  useEffect(() => {
    getMessagesById(messageId)
    .then((message) => {
      setMessage(message);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
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

          <div className="button">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingMessage}
              className="btn btn-primary">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}