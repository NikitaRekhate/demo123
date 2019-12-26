import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AdminDetails} from '../model/admin.model';
import {Login} from '../model/Login.model';
import {AddressDetails} from '../model/AddressDetails.model';
import { EmployeeDetails } from 'app/model/EmployeeDetails.model';

@Injectable({
  providedIn: 'root'
})
export class AdminsahredservicesService {
  e:EmployeeDetails={
    employeeFirstName:'',
    employeeLastName:'',
    employeeEmailId:'',
    employeeContact:'',
    employeeAadharNo:null,
    employeePanNo:'',
    employeeSalary:null,
    login: {
      loginUserName: '',
      loginPassword: '',
      status: '',
      role: null},
      address: {
        addressVillage: '',
        addressTalName: '',
        addressDistName: '',
        addressStateName: '',
        addressCountryName: '',
        addressZiPcode:null
    }
  }
  
  

  log:Login={
    loginUserName: '',
      loginPassword: '',
      status: '',
      role: null
  }



  constructor(private http:HttpClient) { }
  
  url="http://localhost:8082/admin/add";
  url1="http://localhost:8082/admin";
  urll="http://localhost:8082/login/log";
  url2="http://localhost:8082/employee/saveEmp";
  //url3="http://localhost:8082/employee/saveEmp"
  addAdmin(adm)
  {

  console.log(adm);

    return this.http.post<number>(this.url+'/',adm);

  }

  addAddrs(addrs)
  {
    return this.http.post<number>(this.url+'/',addrs);
  }

  addLogin(log1)
  {
    console.log(log1);
    try{
      return this.http.post<Login>(this.urll+'/',log1);
    }
    finally{console.log(Login);}
   

  }
  addemp(eesss)
   {
     console.log(eesss);
// return this.http.post<EmployeeDetails>(this.url2+"/employee"+"/"+"saveEmp",ss);
return this.http.post<number>(this.url2+'/',eesss);

  }
  

  getEmpData()
  {
    return this.http.get<EmployeeDetails[]>(this.url1+'/getEmp');
  }
  updateEmployee(up)
  {
  //  return this.http.post<EmployeeDetails>(this.url3+'/',up)
  }
}
