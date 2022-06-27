package com.spring.boot.medicore.services;

import java.util.List;

import com.spring.boot.medicore.entities.MedicoreUserRegistered;

public interface MedicoreUserService {
	
	public boolean addUserSignUp(MedicoreUserRegistered user);
	
	public List<MedicoreUserRegistered> getAllUser();
	
	public MedicoreUserRegistered getUser(int user_id);
	
	public MedicoreUserRegistered updateUserPassword(int user_id, MedicoreUserRegistered user);

}
