import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  
    fNumber: number=0;
    pName: string='';
    pNo: string='';
  
    constructor(private http: HttpClient,private router:Router) { }
  
    createOwner() {
      const url = 'https://localhost:7003/api/createowner';
      const data = {
        FlatNumber: this.fNumber,
        Name: this.pName,
        PhoneNumber: this.pNo
      };
      this.http.post(url, data).subscribe((data)=>console.log(`Insert successful for ${this.pName}`));
      // this.router.navigate(['/SignIn'])
    }
  }
  





