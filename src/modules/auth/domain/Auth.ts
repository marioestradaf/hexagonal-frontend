export default class Auth {
  id: string;
  name: string;
  email: string;
  token: string;
  
  constructor(data: { id: string; name: string; email: string; token: string }) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.token = data.token;
  }
}