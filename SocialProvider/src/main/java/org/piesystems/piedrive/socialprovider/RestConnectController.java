/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.view.RedirectView;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
@RestController
public class RestConnectController {
	
	@Autowired
	private ConnectController social;
	@Autowired
	private SecurityUserIdSource securityUserIdSource;
	
	@RequestMapping(value="connect/2/{providerId}", method=RequestMethod.POST)
	public ProviderRedirectUrl connect(@PathVariable String providerId, NativeWebRequest request) {		
		RedirectView redirect = social.connect(providerId, request);
		//todo-sv: this is a workaround the be able to map the user for whom
		//the provider is redirecting
		//try writing a JWT based sessionStrategy based on 
		//ConnectController.setSessionStrategy or on the custom REST connectController
		this.securityUserIdSource.setSessionUser();
		//redirect.get
		return new ProviderRedirectUrl(redirect.getUrl());
	}
	
}
