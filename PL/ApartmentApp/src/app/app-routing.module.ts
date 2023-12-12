import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacilityMgtComponent } from './facility-mgt/facility-mgt.component';

const routes: Routes = [
  {path:'getOwner',component:FacilityMgtComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
