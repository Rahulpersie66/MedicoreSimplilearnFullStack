import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/AllService/service.service';
import { MedicoreProduct } from 'src/app/model/medicore-product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:MedicoreProduct=new MedicoreProduct();

  constructor(private service:ServiceService,private route:Router) { }

  ngOnInit(): void {
   
  }

  onSubmit(){
    this.saveProduct();
  }

  saveProduct(){
    this.service.addProduct(this.product).subscribe(data=>{console.log(data);this.goToBack()},error=>console.log(error));
  }

  goToBack(){
    this.route.navigate(['/adminViewUpdateProduct']);
  }
}
