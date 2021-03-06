import { Component, OnInit } from '@angular/core';
import { AdminsahredservicesService } from 'app/shared/adminsahredservices.service';
import { EmployeeDetails } from 'app/model/EmployeeDetails.model';

@Component({
  selector: 'app-employee-managment',
  templateUrl: './employee-managment.component.html',
  styleUrls: ['./employee-managment.component.scss']
})
export class EmployeeManagmentComponent implements OnInit {

  constructor(private sharedadmin:AdminsahredservicesService) { }
  showempDiv:boolean=false;
  addempDiv:boolean=false;
  Employee= new EmployeeDetails();
  
  emparray:EmployeeDetails[];
  ss:EmployeeDetails={
    employeeFirstName:'',
    employeeLastName:'',
    employeeEmailId:'',
    employeeContact:'',
    employeeAadharNo:null,
    employeePanNo:'',
    employeeSalary:null
    
  }
  ngOnInit() {
  }

  showEmployee()
  {
    this.showempDiv=true;
    return this.sharedadmin.getEmpData().subscribe(result=>{this.emparray=result });
   
  }
  addemp(ss)
  {
    console.log(ss);
    
    this.addempDiv=true;
    this.showempDiv=false;
    this.sharedadmin.addemp(ss).subscribe();
  }
  addemployee()
  {
    this.addempDiv=true;
    this.showempDiv=false;
    
    return this.sharedadmin.getEmpData().subscribe(result=>{this.emparray=result });
  }
  

}
