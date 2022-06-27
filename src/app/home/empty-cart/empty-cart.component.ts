import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/AllService/cart-service.service';

@Component({
  selector: 'app-empty-cart',
  templateUrl: './empty-cart.component.html',
  styleUrls: ['./empty-cart.component.css']
})
export class EmptyCartComponent implements OnInit {

  public product:any=[];
  public grandTotal :number;

  constructor(private cartService:CartServiceService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })

  }

  removeItem(item:any){
    if(item.quantity>1)
      item.quantity--;
     else
       this.cartService.removeCartItem(item);
  }

  emptyCart(){
    this.cartService.removeAllCart();
  }

}
