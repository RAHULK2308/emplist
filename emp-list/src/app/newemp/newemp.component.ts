import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newemp',
  templateUrl: './newemp.component.html',
  styleUrls: ['./newemp.component.css']
})
export class NewempComponent implements OnInit {
emp:any={
  Name:'',
  Email:'',
  Contact:'',
  Date_of_Birth:'',
  Sex:''
}
  constructor(public empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  Add()
  {    
    this.empService.newemp(this.emp);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);
  }
}
