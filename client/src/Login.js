import React from "react";
import { client_id, client_secret } from "./.Key";
import{ Container } from 'react-bootstrap';

let redirect_uri = "http://localhost:3000";
let scopes = "user-read-private user-read-email";

const AUTH_URL = "https://accounts.spotify.com/authorize" + 
"?response_type=code" +
"&client_id=" + client_id +
(scopes ? "&scope=" + (scopes): '') +
"&redirect_uri=" + redirect_uri;

export default function Login() {
  console.log("client_id " + client_id);
  console.log("AUTH_URL " + AUTH_URL);

  return (
    <div>
      <p>Login component</p>
      <Container>
        <a className="btn btn-success" href={AUTH_URL}></a>
      </Container>
    </div>
  )
}


// 'https://accounts.spotify.com/authorize' +
//   '?response_type=code' +
//   '&client_id=' + my_client_id +
//   (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//   '&redirect_uri=' + encodeURIComponent(redirect_uri));