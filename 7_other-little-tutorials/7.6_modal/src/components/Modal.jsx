import './Modal.css'

function Modal ({ closesModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closesModal(false)}>X</button>
                </div>

                <div className="title">
                    <h1>Do you want to Continue?</h1>
                </div>

                <div className="body">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae optio harum ipsa labore, ad assumenda dolorum libero illum. Obcaecati, est!</p>
                </div>

                <div className="footer">
                    <button id="cancelBtn"onClick={() => closesModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal