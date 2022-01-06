import React from "react";

import "./index.scss";

function Modal(props) {
  const { isShowCheckModal, modalTitle, children } = props;

  return (
    <>
      {isShowCheckModal ? (
        <div className="modal">
          <div className="inner">
            <div className="m-header"> {modalTitle}</div>
            <div className="content-wrapper">{children}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Modal;
