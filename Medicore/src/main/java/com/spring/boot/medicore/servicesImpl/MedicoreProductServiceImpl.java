package com.spring.boot.medicore.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.medicore.entities.MedicoreProduct;
import com.spring.boot.medicore.repositories.MedicoreProductDao;
import com.spring.boot.medicore.services.MedicoreProductService;

@Service
public class MedicoreProductServiceImpl implements MedicoreProductService {
	
	@Autowired
	private MedicoreProductDao productDao;
	
	//add the product
	@Override
	public boolean addProduct(MedicoreProduct product) {
		productDao.save(product);
		return true;
	}

	//LIST of allProducts
	@Override
	public List<MedicoreProduct> getAllProducts() {
		return productDao.findAll();
	}

	//get Product by Id
	@Override
	public MedicoreProduct getProductById(int productId) {
		return productDao.findById(productId).get();
		}

	//Update the product using prodId
	@Override
	public MedicoreProduct updateProductById(MedicoreProduct product, int prodId) {
		MedicoreProduct pro;
		pro=new MedicoreProduct(prodId,product.getProdName(),product.getVendorName(),product.getPrice(),product.getImgUrl(),product.getProdDetail(),product.getType());
		productDao.save(pro);
		return pro;
	}

	@Override
	public boolean deleteProductById(int prodId) {
		boolean flag=false;
		MedicoreProduct prod=productDao.findById(prodId).get();
		productDao.delete(prod);
		flag=true;
		return flag;
	}

}
