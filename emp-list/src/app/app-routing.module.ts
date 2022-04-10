import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { EmpleditComponent } from './empledit/empledit.component';
import { EmplistComponent } from './emplist/emplist.component';
import { NewempComponent } from './newemp/newemp.component';

const routes: Routes = [
{path:'',component:EmplistComponent},
{path:'details',component:EmpdetailsComponent},
{path:'edit',component:EmpleditComponent},
{path:'new',component:NewempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
