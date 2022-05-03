import { useState } from "react";
import Modal from "../Modal/Modal";
import * as Constant from '../../Constant/Constant'

/**
 * Welcome2 page component as per story2.
 */
function Welcome2() {
    //Intital state of Modal, by default false for modal not to display on load.
    const [openModal, setOpenModal] = useState(false);

    // Will receive event from edit button click, and display javascript alert box with message.
    const sendMessage = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert(Constant.ACCOUNT_EDITED);
    };



    return (
        <div>
            <h1 className="h1"><a href={Constant.HOMEPAGE_URL}>{Constant.WELCOME}</a></h1>

            <button name="Edit" type="submit" className="btn btnBlu" onClick={sendMessage}>
                {Constant.EDIT_ACCOUNT}
            </button>

            <button name="Delete" type="submit" className="btn btnRed" onClick={() => { setOpenModal(true); }}>
                {Constant.DELETE_ACCOUNT}
            </button>

            <button name="Logout" type="submit" className="btn btnCyn">
                <a href={Constant.BLUEBEAM_URL}>
                    {Constant.LOGOUT}
                </a>
            </button>

            {openModal && <Modal modalOpen={setOpenModal} />}
        </div>
    );
}

export default Welcome2;
