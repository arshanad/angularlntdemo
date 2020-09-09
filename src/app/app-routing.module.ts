import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { BindingsdemoComponent } from './components/bindingsdemo/bindingsdemo.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'emp',component:EmployeeComponent},
  {path:'eventList',component:EventListComponent},
  {path:'reactiveForm',component:ReactiveFormComponent},
  {path:'user',component:UserComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'bindings',component:BindingsdemoComponent},
  {path:'ngclass',component:NgclassdemoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
