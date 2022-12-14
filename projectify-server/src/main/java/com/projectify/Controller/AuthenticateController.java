package com.projectify.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.projectify.Config.JwtUtils;
import com.projectify.Config.UserDetailsServiceImpl;
import com.projectify.Constant.ExceptionConstant;
import com.projectify.Model.JwtRequest;
import com.projectify.Model.JwtResponse;
import com.projectify.Model.User;

@RestController
@CrossOrigin("*")
public class AuthenticateController {
	
	@Autowired
	private UserDetailsServiceImpl userDetailsServiceImpl;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtUtils jwtUtils;

	// GENERATE TOKEN
	@PostMapping("/generate-token")
	public ResponseEntity<JwtResponse> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		try {
			System.out.println("======================================================   USER LOGGED IN   =======================================================");

			System.out.println(jwtRequest);
			if (jwtRequest.getUsername() == "" || jwtRequest.getPassword() == "") {
				throw new BadCredentialsException("Missing email address or password");
			}

			UserDetails userDetails = userDetailsServiceImpl.loadUserByUsername(jwtRequest.getUsername());
			authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());

			String token = this.jwtUtils.generateToken(userDetails);
			User user = userDetailsServiceImpl.loadByUsername(jwtRequest.getUsername());
			
			return new ResponseEntity<JwtResponse>(new JwtResponse(token, user), HttpStatus.OK);
		} catch (UsernameNotFoundException e) {
			// TODO: handle exception
			System.out.println("ERROR -> " + e.getMessage());
			e.printStackTrace();
			throw new UsernameNotFoundException(e.getMessage());
		}
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			// TODO: handle exception
			System.out.println("ERROR -> " + e.getMessage());
			e.printStackTrace();
			throw new DisabledException("Account associated with this user is disabled");
		} catch (BadCredentialsException e) {
			// TODO: handle exception
			System.out.println("ERROR -> " + e.getMessage());
			e.printStackTrace();
			throw new BadCredentialsException("Sorry, the password is incorrect");
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println("ERROR -> " + e.getMessage());
			e.printStackTrace();
			throw new Exception(ExceptionConstant.DEFAULT);
		}
	}
}
