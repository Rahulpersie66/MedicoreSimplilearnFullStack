import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { MedicoreProduct } from '../model/medicore-product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");
  constructor() { }

  //return Product list as Any observale type
  getProducts(){
    return this.productList.asObservable();
  }

  //set Product list
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){
    // this.cartItemList.forEach((a:any)=>
    // {
    //   // if(a.prodId===product.prodId)
    //   //   product.quantity++;
    //   if(a.prodId==='' || a.prodId!=product.prodId)
    //     {
    //       this.cartItemList.push(product);
    //       this.productList.next(this.cartItemList);
    //       this.getTotalPrice();
    //       this.getAllItem();
    //     }
    //  });
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    this.getAllItem();
    console.log(this.cartItemList);
  }

  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.price*a.quantity;
    })
    return grandTotal;
  }

  getAllItem():string{
    let allItem="";
    this.cartItemList.map((a:any)=>{
      allItem+=a.prodName;
      allItem+=",";
    })
    return allItem;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.prodId==a.prodId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }


}
