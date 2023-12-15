import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facility-mgt',
  templateUrl: './facility-mgt.component.html',
  styleUrls: ['./facility-mgt.component.css']
})
export class FacilityMgtComponent {
public jsonop:any;
public getFacility:any;
public BookFacilities:any;
public SearchByF:any;
public FreeFacility:any;
constructor(private https:HttpClient) {
 
  
}
getOwner(){
  this.https.get('https://localhost:7003/api/getowners')
             .subscribe((data)=>{
              console.log(data); 
              this.jsonop=data;
            })
}

getFacilities(){
  this.https.get('https://localhost:7003/api/getFacilities')
          .subscribe((data)=>{
            console.log(data);
            this.getFacility=data;
          })
        }
BookFacility(){
  this.https.get('https://localhost:7003/api/bookFacility')
  .subscribe((data)=>{
    console.log(data);
    this. BookFacilities=data;
  })
}
SearchByFacilityName(){
  this.https.get('https://localhost:7003/api/SearchByFName')
  .subscribe((data)=>{
    console.log(data);
    this. SearchByF=data;
})
}
feeFacilty(){
  this.https.get('https://localhost:7003/api/freeFacility')
  .subscribe((data)=>{
    console.log(data);
    this.FreeFacility=data;
  }

  )
}



}



    
   







