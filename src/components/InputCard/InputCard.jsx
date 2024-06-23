import React from "react";

function InputCard(props) {
  return (
    <div className="inputCard" style={{ width: props.CardWidth }}>
      <input
        onChange={props.handleTitleInput}
        type="text"
        placeholder="Title"
        className="inputCardTitle"
        value={props.titleValue}
      />
      <textarea
        onChange={props.handleContentInput}
        value={props.contentValue}
        type="text"
        placeholder="Keep something..."
        className="inputCardContent"
      />
      <button
        onClick={props.handleClick}
        className="inputButton"
        style={{
          height: props.height,
          width: props.width,
          bottom: props.bottom,
          fontSize: props.fontSize,
        }}
      >
        {props.operation}
      </button>
    </div>
  );
}

export default InputCard;
