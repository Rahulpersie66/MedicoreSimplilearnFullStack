package com.spring.boot.medicore.servicesImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.boot.medicore.entities.MedicoreUserRegistered;
import com.spring.boot.medicore.repositories.MedicoreUserDao;
import com.spring.boot.medicore.services.MedicoreUserService;

@Service
public class MedicoreUserServiceImpl implements MedicoreUserService {

	@Autowired
	private MedicoreUserDao userDao; 
	
	//addd the USer signUp
	@Override
	public boolean addUserSignUp(MedicoreUserRegistered user) {
		boolean flag=false;
		userDao.save(user);
		flag=true;
		return flag;
	}

	@Override
	public List<MedicoreUserRegistered> getAllUser() {
		return userDao.findAll();
	}

	@Override
	public MedicoreUserRegistered getUser(int user_id) {
		return userDao.findById(user_id).get();
	}

	@Override
	public MedicoreUserRegistered updateUserPassword(int user_id, MedicoreUserRegistered user) {
		MedicoreUserRegistered user1=userDao.findById(user_id).get();
		user1.setPassword(user.getPassword());
		user1.setFullName(user.getFullName());
		user1.setEmail(user.getEmail());
		user1.setAddress(user.getAddress());
		return userDao.save(user1);
	}

}
