import React from "react";

function Info({ login, html_url, name, public_repos }) {
  // const { login, html_url, name, public_repos } = props
  return (
    <div className="info-card">
      <span>Nome: {name}</span>
      <span>Nº repositório: {public_repos}</span>
      <span>Usuário: {login}</span>
      <span>URL: {html_url}</span>
    </div>
  );
}

export default Info;