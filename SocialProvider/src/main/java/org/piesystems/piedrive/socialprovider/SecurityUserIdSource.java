/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.social.UserIdSource;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
public class SecurityUserIdSource implements UserIdSource {

	@Override
	public String getUserId() {
		User user = (User)SecurityContextHolder.getContext()
				.getAuthentication().getPrincipal();
		
		return user.getUsername();
	}
	
}
