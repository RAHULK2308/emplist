import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
emp:any=[]
  constructor(public empService:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    let empId= localStorage.getItem("empId");
    this.empService.getemp(empId).subscribe((data)=>{
      this.emp=JSON.parse(JSON.stringify(data));
  })
  }

  edit(emp:any){
    localStorage.setItem("editId", emp._id);
    this.router.navigate(['edit']);
  }

delete(emp:any){
this.empService.deleteemp(emp._id)
this.router.navigate(['/'])
}

back(){
  localStorage.removeItem('empId');
  this.router.navigate(['/']);
}
}
