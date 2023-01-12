package com.projectify.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projectify.Model.Project;
import com.projectify.Model.User;
import com.projectify.Repository.UserRepository;
import com.projectify.Service.ManagerService;
import com.projectify.Service.Repository.UserRepositoryService;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	@Autowired
	private UserRepositoryService userRepositoryService;
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public void addProject(Project project, String email) throws Exception {
		// TODO Auto-generated method stub
		User sessionUser = userRepositoryService.findByUserName(email);
		
		project.setManager(sessionUser.getManager());
		sessionUser.getManager().getProjects().add(project);
		
		userRepository.save(sessionUser);
	}

}
