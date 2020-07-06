import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: false;

  constructor(private http: Http) {
      this.isDev = false;  // Change to false when you're gonna deploy your app, true when is on develop 
  }

  registerUser(user,  photo:any) {
    const fd = new FormData();
    fd.append('username',user.username);
    fd.append('email',user.email);
    fd.append('name',user.name);
    fd.append('password',user.password);
    fd.append('image', photo);

    let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    //headers.append('Content-Type', 'multipart/form-data');
    let options = new RequestOptions({ headers: headers });

    if(this.isDev) {
      return this.http.post('http://localhost:8080/users/register', fd, options).map(res => res.json());
    }else{
      return this.http.post('users/register', fd, options).map(res => res.json());
    }
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev){
      return this.http.post('http://localhost:8080/users/authenticate', user, {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('users/authenticate', user, {headers: headers}).map(res => res.json());
    }
  }

  getUsers() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    if(this.isDev){
      return this.http.get('http://localhost:8080/users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    }else{
      return this.http.get('users/profile/getAllUsers', {headers: headers}).map(res => res.json());
    }
  }

  updateUsers(user) { 
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.storeUserData(token,user);
    if(this.isDev){
      return this.http.put('http://localhost:8080/users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    }else{
      return this.http.put('users/profile/updateUsers', user, {headers: headers}).map(res => res.json());
    }
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    if(this.isDev){
      return this.http.get('http://localhost:8080/users/profile', {headers: headers}).map(res => res.json());
    }else{
      return this.http.get('users/profile', {headers: headers}).map(res => res.json());
    }
  }

  getSettings() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    if(this.isDev){
      return this.http.get('http://localhost:8080/users/settings', {headers: headers}).map(res => res.json());
    }else{
      return this.http.get('users/settings', {headers: headers}).map(res => res.json());
    }
  }

  getUserMessages(id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    if(this.isDev){
      return this.http.get('http://localhost:8080/users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    }else{
      return this.http.get('users/mailbox/getMessages/' + id, {headers: headers}).map(res => res.json());
    }
  }

  //New message 

  sendMessage(message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev) {
      return this.http.post('http://localhost:8080/users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('users/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    }
  }

  forgotPassword(email) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev) {
      return this.http.post('http://localhost:8080/users/forgot', email, {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('users/forgot', email, {headers: headers}).map(res => res.json());
    }
  }

  resetPassword(reset) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev) {
      return this.http.post('http://localhost:8080/users/reset/:token', reset,  {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('users/reset', reset, {headers: headers}).map(res => res.json());
    }
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}