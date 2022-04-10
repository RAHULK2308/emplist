import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empledit',
  templateUrl: './empledit.component.html',
  styleUrls: ['./empledit.component.css']
})
export class EmpleditComponent implements OnInit {
emp:any=[]
  constructor(public empservice:EmployeeService, private router:Router) { }

  ngOnInit(): void {
    let id= localStorage.getItem("editId");
    this.empservice.getemp(id).subscribe((data)=>{
      this.emp=JSON.parse(JSON.stringify(data));
    })
  }

  edit(){
    this.empservice.edit(this.emp);   
    alert("Success");
    localStorage.removeItem("editId")
    this.router.navigate(['/details']);
  }
}
