import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserTable } from 'src/app/Model/UserTable';
import { RouterModule, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //Variable of type UserTable 
  users: UserTable[];

  //DI
  constructor(private _userService: UserService,private _router: Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
  }
  addUser(){
    this._router.navigate(['addUser']);
  }
  deleteUser(user:UserTable)
  {
    this._userService.deleteUser(user.id).subscribe(data=>{
    });
  }

  // this.userService.getUsers()
  //       .subscribe(data => {
  //         this.users = data;
  //       });
  //GetMethod
  // getAllUsersFun() {
  //   this._userService.getAllUsers()
  //     .subscribe(data => { this.users = data });
  // }
}