import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreUserRegistered } from 'src/app/model/medicore-user-registered';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user= new MedicoreUserRegistered();
  lastUser: MedicoreUserRegistered;
  allUser: MedicoreUserRegistered[];
  constructor(private service: ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  private getAllUser(){
    this.service.getAllUser().subscribe(data=>this.allUser=data);
  }

  onSubmit(form:any){

    //console.log(form.email);
    for(let u of this.allUser)
    { this.lastUser=this.allUser[this.allUser.length-1];
      
      if(u.email===this.user.email && u.password===this.user.password && u.type==='Admin')
        this.router.navigate(['/adminHome']); //Admin home-2 page create
      else if(u.email===this.user.email && u.password===this.user.password)
        this.router.navigate(['/home']);
        // else if(u.email===this.lastUser.email){
        //   this.router.navigate(['/register']);
        // }
     }
    
   }

}
