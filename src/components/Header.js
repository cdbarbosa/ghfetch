import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1 className="title">{props.title}</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}

export default Header;