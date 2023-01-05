package com.projectify.Model;

import lombok.Data;


@Data
public class JwtRequest {
	Integer usercode;
	String password;
}
