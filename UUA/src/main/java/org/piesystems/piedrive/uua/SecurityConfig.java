/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.uua;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
//@Configuration
//@Order(-20)
//@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

//	@Autowired
//	private AuthenticationManager authenticationManager;
//
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		
		http
				.sessionManagement()
					.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				//.formLogin()
				//.and()
//				.requestMatchers()
//				.antMatchers("/login", 
//						"/oauth/authorize",
//						"/oauth/token",
//						"/oauth/confirm_access")
//				.and()
//				.authorizeRequests().anyRequest().authenticated()
				.and()
				.csrf()
					.disable();
		// @formatter:on
	}

//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		//auth.parentAuthenticationManager(authenticationManager);
//		auth.inMemoryAuthentication()
//				.withUser("user").password("password").roles("USER");
//	}
}
