import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent {
  id:number=0;
  name: string='';
  phone: string='';

  
  constructor(private http: HttpClient,private router:Router) {}

  onSubmit() {
    const url = 'https://localhost:7003/api/createowner';
    const data = { id:this.id,name: this.name, phone: this.phone };

    this.http.post(url, data).subscribe(response => {
      console.log(response);
    
    });
    this.router.navigate(['/SignIn'])
    
  }
}





