/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.view.RedirectView;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
public class SocialController extends ConnectController {
	
	private SecurityUserIdSource securityUserIdSource;
	
	public SocialController(ConnectionFactoryLocator connectionFactoryLocator, 
			ConnectionRepository connectionRepository, 
			SecurityUserIdSource securityUserIdSource) {
		super(connectionFactoryLocator, connectionRepository);
		this.securityUserIdSource = securityUserIdSource;
	}

	@Override
	public RedirectView connect(@PathVariable String providerId, NativeWebRequest request) {
		RedirectView redirect = super.connect(providerId, request);
		//todo-sv: this is a workaround the be able to map the user for whom
		//the provider is redirecting
		this.securityUserIdSource.setSessionUser();
		return redirect;
	}

	@Override
	protected RedirectView connectionStatusRedirect(String providerId, NativeWebRequest request) {
		super.connectionStatusRedirect(providerId, request);
		RedirectView view = new RedirectView("http://localhost:8080/providers");
		//todo-sv: this is again a dirty fix to provide the UI with an update
		//in future I will need to write a custom RestConnectController
		//which does not perform this MVC style redirects
		view.addStaticAttribute("provider", providerId);
		return view;
	}
	
	
	
}
