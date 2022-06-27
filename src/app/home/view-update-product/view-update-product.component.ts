import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreProduct } from 'src/app/model/medicore-product';

@Component({
  selector: 'app-view-update-product',
  templateUrl: './view-update-product.component.html',
  styleUrls: ['./view-update-product.component.css']
})
export class ViewUpdateProductComponent implements OnInit {

  productId:number;
  allProducts:MedicoreProduct[];

  constructor(private service:ServiceService,private router:Router) { }

  ngOnInit(): void {

    this.getAllProduct();
  }

  private getAllProduct(){
    this.service.getAllProducts().subscribe(data=>this.allProducts=data);
  }

  updateProduct(productId:number){
    this.router.navigate(['/updateProduct',productId]);
  }

  viewProduct(productId:number){
    this.router.navigate(['/viewProduct',productId]);
  }
  
  deleteProduct(productId:number){
    this.service.deleteProduct(productId).subscribe(data=>{console.log(data);this.goToAdminViewPro();});
  }
  goToAdminViewPro(){
    this.router.navigate(['/adminHome']);
  }
}
