import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserTable } from '../Model/UserTable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Using Depedency Injection We have to inject the HttpClient Class as a Module in
  //the service
  baseURL: string = "http://localhost:3000/users";
  constructor(private _http: HttpClient) {

  }
  //Get All the Users
  getAllUsers() {
    return this._http.get<UserTable[]>(this.baseURL);
  }
  addUser(newUser:UserTable) { 
    return this._http.post<UserTable>(this.baseURL,newUser);
  }
  deleteUser(id)
  {
      return this._http.delete<UserTable>(this.baseURL+"\\"+id);
  }
  editUser(id,editedUser:UserTable)
  {
    return this._http.put(this.baseURL+"\\"+id,editedUser)
  }

}