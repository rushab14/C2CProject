import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facility-mgt',
  templateUrl: './facility-mgt.component.html',
  styleUrls: ['./facility-mgt.component.css']
})
export class FacilityMgtComponent {
public jsonop:any;
constructor(private https:HttpClient) {
 
  
}
getOwner(){
  this.https.get('https://localhost:7003/api/getowners')
             .subscribe((data)=>{
              console.log(data); 
              this.jsonop=data;
            })
}

public Facility(pFname:string,pFavail:boolean){
    
   
}
 


}



