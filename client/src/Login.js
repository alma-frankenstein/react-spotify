import React from "react";
import { client_id, client_secret } from "./.Key";

let redirect_url = "http://localhost3000";
let scopes = "user-read-private user-read-email";

const AUTH_URL = "https://accounts.spotify.com/authorize?response_type=code" +
"&client_id=" + client_id;

export default function Login() {
  console.log("client_id " + client_id);

  return (
    <div>
      <p>Login component</p>
    </div>
  )
}


// 'https://accounts.spotify.com/authorize' +
//   '?response_type=code' +
//   '&client_id=' + my_client_id +
//   (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//   '&redirect_uri=' + encodeURIComponent(redirect_uri));