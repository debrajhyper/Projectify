package com.projectify.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String dateOfCreation;
	
	private String title;
	
	private String location;
	
	private int requiredEmployee;
	
	private String type;
	
	private String image;
	
	private int experience;
	
	private String description;
	
	@JsonIgnore
	@ManyToOne
	private Manager manager;
	
	@JsonIgnore
	@ManyToOne
	private Employee employee;
	
}
