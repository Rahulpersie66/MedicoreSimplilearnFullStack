package com.spring.boot.medicore.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.medicore.entities.MedicoreOrderBooked;
import com.spring.boot.medicore.repositories.MedicoreOrderBookedDao;
import com.spring.boot.medicore.services.MedicoreOrderBookedService;

@Service
public class MedicoreOrderBookedServiceImpl implements MedicoreOrderBookedService {
	
	@Autowired
	private MedicoreOrderBookedDao orderDao;
	
	//adding the order in MedicoreOrderServiceImpl
	@Override
	public MedicoreOrderBooked addOrder(MedicoreOrderBooked order) {
		//MedicoreOrderBooked realOrder=new MedicoreOrderBooked(order.getName(), order.getCompanyName(), order.getCountry(), order.getAddress(), order.getPostcode(), order.getEmail(), order.getPhone());
		orderDao.save(order);
		return order;
		
	}

	//to getone Order by id
	@Override
	public MedicoreOrderBooked getOneOrder(int orderId) {
		return orderDao.findById(orderId).get();
	}

	//to update order by id
	@Override
	public MedicoreOrderBooked updateOrder(int orderId, MedicoreOrderBooked order) {
		MedicoreOrderBooked newOrder=orderDao.findById(orderId).get();
		newOrder.setCardNumber(order.getCardNumber());
		return orderDao.save(newOrder);
	}

	@Override
	public List<MedicoreOrderBooked> getAllOrder() {
		// TODO Auto-generated method stub
		return orderDao.findAll();
	}

}
