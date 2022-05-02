import { useState } from "react";
import Modal from "../Modal/Modal";

/**
 * Welcome2 page component as per story2.
 */
function Welcome2() {
    //Intital state of Modal, by default false for modal not to display on load.
    const [openModal, setOpenModal] = useState(false);

    // Will receive event from edit button click, and display javascript alert box with message.
    const sendMessage = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert("Account Edited");
    };

    return (
        <div>
            <h1 className="h1"><a href="/bluebeam-assessment/#/">Welcome!</a></h1>

            <button name="Edit" type="submit" className="btn btnBlu" data-testid="toggle-image-view" onClick={sendMessage}>
                Edit
            </button>

            <button name="Delete" type="submit" className="btn btnRed" onClick={() => { setOpenModal(true); }}>
                Delete
            </button>

            <button name="Logout" type="submit" className="btn btnCyn">
                <a href="https://www.bluebeam.com/">Logout</a>
            </button>

            {openModal && <Modal modalOpen={setOpenModal} />}
        </div>
    );
}

export default Welcome2;
