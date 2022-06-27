import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreUserRegistered } from 'src/app/model/medicore-user-registered';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:MedicoreUserRegistered=new MedicoreUserRegistered();
  
  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  saveUser(){
    this.service.addUser(this.user).subscribe(data=>{console.log(data);
      this.goToHome()},error=>console.error());
      ;
    
  }

  goToHome(){
    this.route.navigate(['/home']);
  }

  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
