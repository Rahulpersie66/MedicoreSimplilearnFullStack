import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreProduct } from 'src/app/model/medicore-product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId:number;
  product: MedicoreProduct=new MedicoreProduct();
  constructor(private service:ServiceService, private route:Router,private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId=this.activate.snapshot.params['productId'];
    this.service.getProductByProductId(this.productId).subscribe(data=>this.product=data);

  }

  onSubmit(){
    this.service.updateProduct(this.productId,this.product).subscribe(data=>this.goToProductList());
  }

  goToProductList(){
      this.route.navigate(['/adminViewUpdateProduct']);  
  }
}
