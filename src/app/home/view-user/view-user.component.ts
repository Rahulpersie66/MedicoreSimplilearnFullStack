import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreUserRegistered } from 'src/app/model/medicore-user-registered';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:number;
  user: MedicoreUserRegistered=new MedicoreUserRegistered();
  constructor(private service:ServiceService, private route :Router, private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.userId=this.activate.snapshot.params['userId'];
    this.service.getUserById(this.userId).subscribe(data=>this.user=data);
  }

  onSubmit(){
    this.route.navigate(['/allUser']);
  }
}
