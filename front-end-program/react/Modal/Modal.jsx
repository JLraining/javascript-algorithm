import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function Portal({ children }) {
  const el = React.useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(children, el);
}


export default function Modal() {

    return (
        <React.Fragment>
          {(open || active) && (
            <Portal className="modal-portal">
                <Content className="modal-content">{props.children}</Content>
            </Portal>
          )}
        </React.Fragment>
    );
}
