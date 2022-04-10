import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  server_address:string="http://localhost:3000";
  constructor(private http:HttpClient) { }
  employess:any=[];
  getemps(){
   return this.http.get(`${this.server_address}/getData`)
  }
  getemp(id:any){
    return this.http.get(`${this.server_address}/emp/`+id);
  }
  newemp(item:any)
  {   
    return this.http.post(`${this.server_address}/insert`,item)
    .subscribe(data =>{console.log(data)})
  }

  deleteemp(id:any)
  {

    return this.http.delete(`${this.server_address}/empremove/`+id)

  }
  edit(emp:any)
  {
    console.log('client update')
    return this.http.put(`${this.server_address}/emp/update/`,emp )
    .subscribe(data =>{console.log(data)})
  }

}
