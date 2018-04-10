export class User {
id: number;
name: string;
e_mail: string;
username: string;
mobile: number;
password: string;

constructor(id: number ,name: string ,e_mail: string ,username: string ,mobile: number ,password: string ) {
  this.id = id;
  this.name = name;
  this.e_mail = e_mail;
  this.mobile = mobile;
  this.password = password;
  this.username = username;
}
  }