package com.projectify.Controller;

import java.security.Principal;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projectify.Constant.MessageConstant;
import com.projectify.Model.Project;
import com.projectify.Service.ManagerService;

@RestController
@CrossOrigin("*")
@RequestMapping("/manager")
public class ManagerController {
	
	@Autowired
	private ManagerService managerService;
	
	@PostMapping("/add-project")
	public ResponseEntity<String> addProjects(@Valid @RequestBody Project project, Principal principal) throws Exception {
		System.out.println("======================================================   ADD PROJECT   =======================================================");
		
		String email = principal.getName();
		managerService.addProject(project, email);
		
		return new ResponseEntity<String>(MessageConstant.ADD_PROJECT_SUCCESS, HttpStatus.CREATED);
		
	}
}
