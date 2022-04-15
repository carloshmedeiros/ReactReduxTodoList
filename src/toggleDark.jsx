import React from "react";

export default function ToggleDark(props) {
  return (
    <div>
      <div className="wrapper">
        <label className="switch">
          <button
            className="btn btn-secondary mx-2"
            value="Mudar tema"
            type="button"
            onClick={() => {
              props.ToggleDark();
            }}
          >
            Mudar fundo 🎨
          </button>
        </label>
      </div>
    </div>
  );
}
