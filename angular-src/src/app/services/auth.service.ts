import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;
  isDev: true;

  constructor(private http: Http) {
      this.isDev = true;  // Change to false when you're gonna deploy your app, true when is on develop 
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev) {
      return this.http.post('http://localhost:8080/users/register', user, {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('users/register', user, {headers: headers}).map(res => res.json());
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
      return this.http.get('users/profile', {headers: headers}).map(res => res.json());
    }
  }

  //New message 

  sendMessage(message) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(this.isDev) {
      debugger;
      return this.http.post('http://localhost:8080/mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
    }else{
      return this.http.post('mailbox/sendMessage', message, {headers: headers}).map(res => res.json());
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