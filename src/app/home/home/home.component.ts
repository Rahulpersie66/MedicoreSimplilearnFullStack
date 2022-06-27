import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/AllService/cart-service.service';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreProduct } from 'src/app/model/medicore-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //search key to search in navbar
  searchKey:string="";
  products:MedicoreProduct[];
  filterCategory:any;

  constructor(private service:ServiceService,private cartService: CartServiceService) { }

  ngOnInit(): void {
    this.getAllProducts();

    //for store search result of search navabar
    this.service.search.subscribe(data=>{this.searchKey=data;console.log(data)});
  }

  // search(event:any){}

  public getAllProducts(){
    this.service.getAllProducts().subscribe(data=>{
      this.products=data;
      //copy t he data into filter ctaegory for per section
      this.filterCategory=data;
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
        
     });
      console.log(data);
    });
  }
  
  //differebt category method
  filter(type:any){
    this.filterCategory=this.products.filter((a:any)=>
    {
      if(a.type==type || type=='')
      {
        return a;
      }
    })
  }

  //this add to cart items
  addToCart(item:any){
    this.cartService.addToCart(item);
}




}
