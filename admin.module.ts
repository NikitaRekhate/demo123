import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdmindashComponent } from "./admindash/admindash.component";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";
import { EmployeeManagmentComponent } from './employee-managment/employee-managment.component';
import { ReportgenerationComponent } from "./reportgeneration/reportgeneration.component";
import { PrivacyComponent } from './privacy/privacy.component';
import { FormsModule } from "@angular/forms";



const adminrouting: Routes = [
  { path: "admindash", component: AdmindashComponent },
  { path: "adminprofile", component: ProfileComponent },
  { path: "adminemployeemanagment", component: EmployeeManagmentComponent },
  { path: "adminreportgen", component: ReportgenerationComponent },

];
@NgModule({
  declarations: [AdmindashComponent, ProfileComponent, EmployeeManagmentComponent, ReportgenerationComponent, PrivacyComponent],
  imports: [CommonModule, RouterModule.forChild(adminrouting), FormsModule]
})
export class AdminModule { }
