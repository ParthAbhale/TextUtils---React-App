import React from "react";

export default function Alerts(props) {

    const capitilize = (word) => {
        const lower = word.toLowerCase();
        return  lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
   props.alert && <div>
      {/* <div className={`alert alert-${props.alert.type}`} role="alert"> */}
      <div
        className={`alert alert-${props.alert.type} alert-dismissible`}
        role="alert"
        id="liveAlert"
      >
        <strong>{capitilize(props.alert.type)}</strong>:{props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
