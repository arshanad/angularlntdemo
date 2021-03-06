import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {UserTable} from 'src/app/Model/UserTable'

 

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private _userService:UserService) { }

 

  ngOnInit(): void {
    this.addForm=this.formBuilder.group({
      id:[],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]]
    })
  }
  onSubmit(form:UserTable)
  {
    //console.log(form);

    this._userService.addUser(form).subscribe(
      data => {
        //console.log(data);
        alert("User added successfully");
      }
    );  
  }
}