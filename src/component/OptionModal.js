import React from "react";
import Modal from "react-modal"


const OptionModal = (props) =>(
        <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleRemoveSelectedOption}
        contentLabel="Selected Option is"
        >
        <h3>Selected Option is:</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleRemoveSelectedOption}>Okay</button>
        </Modal>
        )

export default OptionModal