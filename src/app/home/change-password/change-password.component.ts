import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreUserRegistered } from 'src/app/model/medicore-user-registered';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  userId:number;
  user:MedicoreUserRegistered=new MedicoreUserRegistered();
  constructor(private service :ServiceService,private route:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.userId=this.activate.snapshot.params['userId'];
    this.service.getUserById(this.userId).subscribe(data=>this.user=data);

  }

  onSubmit(){
    this.service.updateUser(this.userId,this.user).subscribe(data=>this.goToUserList());
  }

  goToUserList(){
      this.route.navigate(['/allUser']);  
  }

}
