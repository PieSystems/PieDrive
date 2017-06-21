/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.social.UserIdSource;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
public class SecurityUserIdSource implements UserIdSource {

	@Override
	public String getUserId() {
		String user = (String)SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		//todo-sv: this is a workaround for the anonymous redirect from the providers
		//as soon as we have JWT tokens incorporated into the oauth2 flow
		//it should be fine without
		if(user.equals("anonymousUser")) {
			user = (String)RequestContextHolder
					.currentRequestAttributes()
					.getAttribute("username", RequestAttributes.SCOPE_SESSION);
			
			RequestContextHolder.currentRequestAttributes()
					.removeAttribute("username", 
							RequestAttributes.SCOPE_SESSION);
		}
		
		return user;
	}
	
	public void setSessionUser() {
		RequestContextHolder
				.currentRequestAttributes()
				.setAttribute("username", this.getUserId(), 
						RequestAttributes.SCOPE_SESSION);
	}
}
