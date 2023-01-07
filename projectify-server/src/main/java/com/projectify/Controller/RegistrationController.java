package com.projectify.Controller;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectify.Constant.MessageConstant;
import com.projectify.Constant.RoleConstant;
import com.projectify.Model.Role;
import com.projectify.Model.User;
import com.projectify.Model.UserRole;
import com.projectify.Service.RegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/register-admin")
	public ResponseEntity<String> registerAdmin(@Valid @RequestBody User user) throws Exception {
		System.out.println("======================================================   ADMIN SIGNUP   =======================================================");
		
		Set<UserRole> roles = new HashSet<>();
		
			Role role = new Role();
			role.setRoleId(RoleConstant.ADMIN_ROLE_ID);
			role.setRoleName(RoleConstant.ADMIN_ROLE_NAME);
			
			UserRole userRole = new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
		
		roles.add(userRole);
		
		registrationService.registerAdmin(user, roles);
		
		return new ResponseEntity<String>(MessageConstant.REGISTER_ADMIN_SUCCESS, HttpStatus.CREATED);
	}
	
	@PostMapping("/register-manager")
	public ResponseEntity<String> registerManager(@Valid @RequestBody User user) throws Exception {
		System.out.println("======================================================   MANAGER SIGNUP   =======================================================");
		
		Set<UserRole> roles = new HashSet<>();
		
			Role role = new Role();
			role.setRoleId(RoleConstant.MANAGER_ROLE_ID);
			role.setRoleName(RoleConstant.MANAGER_ROLE_NAME);
			
			UserRole userRole = new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
		
		roles.add(userRole);
		
		registrationService.registerManager(user, roles);
		
		return new ResponseEntity<String>(MessageConstant.REGISTER_MANAGER_SUCCESS, HttpStatus.CREATED);
	}
	
	@PostMapping("/register-employee")
	public ResponseEntity<String> registerEmployee(@Valid @RequestBody User user) throws Exception {
		System.out.println("======================================================   EMPLOYEE SIGNUP   =======================================================");
		
		Set<UserRole> roles = new HashSet<>();
		
			Role role = new Role();
			role.setRoleId(RoleConstant.EMPLOYEE_ROLE_ID);
			role.setRoleName(RoleConstant.EMPLOYEE_ROLE_NAME);
			
			UserRole userRole = new UserRole();
			userRole.setUser(user);
			userRole.setRole(role);
		
		roles.add(userRole);
		
		registrationService.registerEmployee(user, roles);
		
		return new ResponseEntity<String>(MessageConstant.REGISTER_MANAGER_SUCCESS, HttpStatus.CREATED);
	}
}
