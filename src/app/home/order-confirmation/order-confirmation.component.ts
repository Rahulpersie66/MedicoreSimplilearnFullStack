import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/AllService/cart-service.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  cartProduct: any[];
  grandTotal:number;
  alltotal:number;

  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>
      {
      this.cartProduct=res;
      this.grandTotal=this.cart.getTotalPrice();
      this.alltotal=this.grandTotal*0.14+this.grandTotal;
    }
      );
  }
  

}
