/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
@SpringBootApplication
@EnableResourceServer
public class Application extends WebSecurityConfigurerAdapter {

	/**
	 * @param args the command line arguments
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
	@Override
	public void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		//todo-sv: recheck this security config
		http
			.requestMatchers()
				//GET on /connect is needed to receive the redirect from the 
				//providers as long as there is no solution for incorporating 
				//JWT token
				//todo-sv: find a way to incorporate the JWT token into the 
				//oauth2 flow
				.antMatchers(HttpMethod.GET, "/connect/**")
				.and()
			//.logout().and()
			.authorizeRequests()
				.anyRequest().permitAll()
				.and()
			.sessionManagement()
				.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
				.and()
			.csrf()
				.disable();
			// @formatter:on
	}
}
