import { useEffect, useRef } from "react";
import user from "../../Assets/user.png"

/**
 * Delete modal confirmation component will load at the time of click delete button.
 * Receive props from other component and upudate on interacting with modal.
 */

function Modal({ modalOpen }: { modalOpen: any }) {

    // If click outside the  Modal/Dailog, should close modal 
    const dialogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutsideDialog = (event: any) => {
            if (
                dialogRef && dialogRef.current &&
                !dialogRef.current.contains(event.target)
            ) {
                modalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideDialog);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideDialog);
        };
    }, [modalOpen, dialogRef]);

    function refreshPage() {
        window.location.reload();
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer" ref={dialogRef}>

                <div className="closeBtn">
                    <button name="Close" type="submit" onClick={() => { modalOpen(false) }}>
                        X
                    </button>
                </div>

                <img className="img" src={user} alt="UserImage" />

                <div className="title">
                    Are your sure you want to delete your account?
                </div>

                <div className="footer">
                    <button name="Cancel" type="submit" className="btn btnGry" onClick={() => { modalOpen(false) }}>
                        Cancel
                    </button>

                    <button name="Delete" type="submit" className="btn btnRed" onClick={refreshPage} >
                        Delete
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Modal;
