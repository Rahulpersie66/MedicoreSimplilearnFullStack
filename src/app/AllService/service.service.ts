import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MedicoreOrderBooked } from '../model/medicore-order-booked';
import { MedicoreProduct } from '../model/medicore-product';
import { MedicoreUserRegistered } from '../model/medicore-user-registered';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url = "http://localhost:8080";

  public search=new BehaviorSubject<string>("");

  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<MedicoreProduct[]>{
    return this.httpClient.get<MedicoreProduct[]>(`${this.url}/admin/showProducts`);
  }

  getAllUser():Observable<MedicoreUserRegistered[]>{
    return this.httpClient.get<MedicoreUserRegistered[]>(`${this.url}/admin/showAllUser`);
  }

  getProductByProductId(productId:number):Observable<MedicoreProduct>{
    return this.httpClient.get<MedicoreProduct>(`${this.url}/admin/product/${productId}`);
  }

  getUserById(userId:number):Observable<MedicoreUserRegistered>{
    return this.httpClient.get<MedicoreUserRegistered>(`${this.url}/admin/changePassword/${userId}`);
  }

  updateProduct(productId:number,product:MedicoreProduct):Observable<MedicoreProduct>{
    return this.httpClient.put<MedicoreProduct>(`${this.url}/admin/upadte/${productId}`,product);
  }

  updateUser(userId:number,user:MedicoreUserRegistered):Observable<MedicoreUserRegistered>{
    return this.httpClient.put<MedicoreUserRegistered>(`${this.url}/admin/updatePassword/${userId}`,user);
  }

  deleteProduct(productId:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/admin/deleteProduct/${productId}`,{responseType:'text'});
  }

  addProduct(product:MedicoreProduct):Observable<Object>{
    return this,this.httpClient.post(`${this.url}/admin/addProductDetails`,product);
  }

  addUser(user:MedicoreUserRegistered) :Observable<Object>{
    return this.httpClient.post(`${this.url}/admin/addedSignUpUser`,user,{responseType:'text'});
  }

  addOrderBooked(order : MedicoreOrderBooked):Observable<Object>{
    return this.httpClient.post(`${this.url}/checkout/orderBooked`,order);
  }

  getAllOrder():Observable<MedicoreOrderBooked[]>{
    return this.httpClient.get<MedicoreOrderBooked[]>(`${this.url}/allOrder`);
  }

  updateOrderById(orderId:number,order:MedicoreOrderBooked):Observable<MedicoreOrderBooked>{
    return this.httpClient.put<MedicoreOrderBooked>(`${this.url}/checkout/${orderId}`,order);
  }

  getOrderById(orderId:number):Observable<MedicoreOrderBooked>{
    return this.httpClient.get<MedicoreOrderBooked>(`${this.url}/checkout/${orderId}`);
  }

}
