import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityMgtComponent } from './facility-mgt/facility-mgt.component';
import { SigninComponent } from './sign-in/sign-in.component';
import { OwnerComponent } from './owner/owner.component';

const routes: Routes = [
  {path:'getOwner',component:FacilityMgtComponent},
   {path:'GetFacility',component:FacilityMgtComponent},
   {path:'BookFacilty',component:FacilityMgtComponent},
   {path:'SearchByFName',component:FacilityMgtComponent},
   {path:'SignIn',component:SigninComponent},
   {path:'freeFacility',component:FacilityMgtComponent},
   {path:'createOwner',component:OwnerComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
