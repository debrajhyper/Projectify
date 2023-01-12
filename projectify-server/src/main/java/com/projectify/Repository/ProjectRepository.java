package com.projectify.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projectify.Model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Integer> {
	
	@Query("from Project as pro where pro.manager.managerCode = :managerCode")
	public List<Project> findProjectByManagerCode(@Param("managerCode") String managerCode);
}
