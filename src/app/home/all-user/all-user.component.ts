import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreUserRegistered } from 'src/app/model/medicore-user-registered';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  userId:number;
  allUser:MedicoreUserRegistered[];
  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(data=>this.allUser=data);
  }

  viewUser(userId:number){
    this.route.navigate(['/viewUser',userId]);
  }

  updatePassword(userId:number){
    this.route.navigate(['/changePassword',userId]);
  }
  

}
