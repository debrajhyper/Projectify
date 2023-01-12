package com.projectify.Service;

import com.projectify.Model.Project;

public interface ManagerService {
	
	public void addProject(Project project, String email) throws Exception;
}
