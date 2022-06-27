package com.spring.boot.medicore.services;

import java.util.List;

import com.spring.boot.medicore.entities.MedicoreProduct;

public interface MedicoreProductService {
	
	//add the product
	public boolean addProduct(MedicoreProduct product);
	
	//show all LIST of PRoduct
	public List<MedicoreProduct> getAllProducts();
	
	//get product by id
	public MedicoreProduct getProductById(int productId);
	
	//update product by using prodId
	public MedicoreProduct updateProductById(MedicoreProduct product, int prodId);
	
	//delete the product by prodId
	public boolean deleteProductById(int prodId);
}
