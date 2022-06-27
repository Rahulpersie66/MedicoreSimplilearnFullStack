import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from './AllService/cart-service.service';
import { ServiceService } from './AllService/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Medicore-Frontend';
  totalItem:number;
  searchTerm : string='';
  
  constructor(private service:ServiceService,private route:Router,private cartService:CartServiceService){}
  
  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem=res.length;
    });
    
  }
  search(event:any){
    
    this.searchTerm=(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.service.search.next(this.searchTerm);
    console.log(this.searchTerm);
  }
}
