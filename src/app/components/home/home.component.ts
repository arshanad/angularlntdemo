import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  Fname:string[]=["Anurag","Animesh","Arhan"];
  Lname:string[]=["Dutta","Mukherjee","Das"];
  Age:number[]=[29,24,22];
  Salary:number[]=[50000,47000,49000];
  constructor() { }

  ngOnInit(): void {
  }

}