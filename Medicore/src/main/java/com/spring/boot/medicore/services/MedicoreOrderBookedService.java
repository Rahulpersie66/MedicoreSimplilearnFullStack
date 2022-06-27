package com.spring.boot.medicore.services;
import java.util.List;

import com.spring.boot.medicore.entities.MedicoreOrderBooked;

public interface MedicoreOrderBookedService {
	//to add the order booked
	
	public MedicoreOrderBooked addOrder(MedicoreOrderBooked order);
	
	//to get one order
	public MedicoreOrderBooked getOneOrder(int orderId);
	
	//to update Order by id
	public MedicoreOrderBooked updateOrder(int orderId,MedicoreOrderBooked order);
	
	//getAll order list
	public List<MedicoreOrderBooked> getAllOrder();
	
}
