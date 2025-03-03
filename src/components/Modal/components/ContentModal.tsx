import React from "react";

interface PropContentModal {
  onClick: () => void;
  text: string;
  btnText: string;
}

const ContentModal: React.FC<PropContentModal> = ({
  onClick,
  text,
  btnText,
}) => {
  return (
    <div className="modal">
      <div className="modalTitle"> {text}</div>
      <button onClick={() => onClick()} type="button" className="modalBtn">
        {btnText}
      </button>
    </div>
  );
};

export default ContentModal;
