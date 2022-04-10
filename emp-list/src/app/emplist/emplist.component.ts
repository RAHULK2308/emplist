import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  pageTitle="Employee List";
  employees:any=[];
  constructor(public empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
   
    this.empService.getemps().subscribe((data)=>{
      // this.employees=JSON.parse(JSON.stringify(data));
      this.employees=data
    })
  
   
   
  }



  singleemp(emp:any){
    localStorage.setItem("empId", emp._id.toString());
    this.router.navigate(['details']);
  }

}
