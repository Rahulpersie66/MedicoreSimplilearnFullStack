package com.spring.boot.medicore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.medicore.entities.MedicoreOrderBooked;
import com.spring.boot.medicore.entities.MedicoreProduct;
import com.spring.boot.medicore.entities.MedicoreUserRegistered;
import com.spring.boot.medicore.servicesImpl.MedicoreOrderBookedServiceImpl;
import com.spring.boot.medicore.servicesImpl.MedicoreProductServiceImpl;
import com.spring.boot.medicore.servicesImpl.MedicoreUserServiceImpl;



@RestController
@CrossOrigin("*")
public class AdminController {
	
	@Autowired
	private MedicoreUserServiceImpl userServiceImpl;
	@Autowired
	private MedicoreProductServiceImpl productServiceImpl;
	@Autowired
	private MedicoreOrderBookedServiceImpl orderserviceImpl;
	
	//add the sign up user
	@PostMapping("/admin/addedSignUpUser")
	public String addSignUser(@RequestBody  MedicoreUserRegistered user)
	{	if(userServiceImpl.addUserSignUp(user))
			return "User added successfully";
		else
			return "some error occurred";
	}
	
	//get all the Signed up user
	@GetMapping("/admin/showAllUser")
	public List<MedicoreUserRegistered> getAllUser(){
		return userServiceImpl.getAllUser();
	}
	
	//get user by id
	@GetMapping("/admin/changePassword/{user_id}")
	public MedicoreUserRegistered getUser(@PathVariable int user_id) {
		return userServiceImpl.getUser(user_id);
		
	}
	
	//update the password
	@PutMapping("/admin/updatePassword/{user_id}")
	public MedicoreUserRegistered updateUserPassword(@PathVariable int user_id,@RequestBody MedicoreUserRegistered user) {
		return userServiceImpl.updateUserPassword(user_id, user) ;
	}
	
	//Add the product details to API
	@PostMapping("/admin/addProductDetails")
	public MedicoreProduct addTheProduct(@RequestBody MedicoreProduct product)
	{
		if(productServiceImpl.addProduct(product))
			return product;
		else
			return null;
	}
	
	//get Productby ID
	@GetMapping("/admin/product/{productID}")
	public MedicoreProduct getProductById(@PathVariable int productID) {
		return productServiceImpl.getProductById(productID);
	}
	
	
	//get all the Products
	@GetMapping("/admin/showProducts")
	public List<MedicoreProduct> getAllProducts(){
		return productServiceImpl.getAllProducts();
	}
	
	//update the product by productId
	@PutMapping("/admin/upadte/{productId}")
	public MedicoreProduct updateProduct(@RequestBody MedicoreProduct product,@PathVariable int productId) {
		return productServiceImpl.updateProductById(product, productId);
	}
	
	
	//Delete a product
	@DeleteMapping("/admin/deleteProduct/{productId}")
	public String deleteProduct(@PathVariable int productId) {
		if(productServiceImpl.deleteProductById(productId))
		return "product is deleted";
		else
			return "not deleted";
	}
	
	//Order booked
	@PostMapping("/checkout/orderBooked")
	public MedicoreOrderBooked bookOrder(@RequestBody MedicoreOrderBooked order) {
		return orderserviceImpl.addOrder(order);
	}
	
	//get OrderId
	@GetMapping("/checkout/{orderId}")
	public MedicoreOrderBooked getOneOrder(@PathVariable int orderId) {
		return orderserviceImpl.getOneOrder(orderId);
	}
	
	@PutMapping("/checkout/{orderId}")
	public MedicoreOrderBooked updateOrderById(@PathVariable int orderId,@RequestBody MedicoreOrderBooked order)
	{
		return orderserviceImpl.updateOrder(orderId, order);
	}
	
	@GetMapping("/allOrder")
	public List<MedicoreOrderBooked> getAllOrder(){
		return orderserviceImpl.getAllOrder();
	}
}
