const app = "I don't do much.";

const token = '4fadb4e12edbf34dc1bee277d92e16128e9a0ed6';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
