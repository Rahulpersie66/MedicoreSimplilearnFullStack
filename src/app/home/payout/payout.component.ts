import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/AllService/cart-service.service';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreOrderBooked } from 'src/app/model/medicore-order-booked';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css']
})
export class PayoutComponent implements OnInit {
  
  orderId:number=15;
  proComp:string;
  product:any;
  productOrdered:string;
  allOrder:MedicoreOrderBooked[];
  order:MedicoreOrderBooked=new MedicoreOrderBooked();
  constructor(private route:Router,private cartService:CartServiceService,private service:ServiceService,private activate:ActivatedRoute) { }

  ngOnInit(): void {

    this.orderId=this.activate.snapshot.params['orderId'];
    this.service.getOrderById(this.orderId).subscribe(data=>this.order=data);
    this.service.getAllOrder().subscribe(data=>this.allOrder=data);

  }

  
  onSubmit(){
    
  
    this.service.updateOrderById(this.orderId,this.order).subscribe(data=>{this.order=data; console.log(this.order)});
    this.route.navigate(['/orderConfirmation']);
  }
}
