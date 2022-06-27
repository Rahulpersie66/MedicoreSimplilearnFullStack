import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreProduct } from 'src/app/model/medicore-product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId:number;
  product:MedicoreProduct= new MedicoreProduct();
  constructor(private service:ServiceService, private activate :ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    
  this.productId=this.activate.snapshot.params['productId'];

  this.service.getProductByProductId(this.productId).subscribe(data=>this.product=data);
  }

  onSubmit(){
    this.route.navigate(['/adminViewUpdateProduct']);
  }

}
