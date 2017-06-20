/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import org.springframework.social.connect.ConnectionFactoryLocator;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.connect.web.ConnectController;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.servlet.view.RedirectView;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
public class SocialController extends ConnectController {
	
	public SocialController(ConnectionFactoryLocator connectionFactoryLocator, ConnectionRepository connectionRepository) {
		super(connectionFactoryLocator, connectionRepository);
	}

	@Override
	protected RedirectView connectionStatusRedirect(String providerId, NativeWebRequest request) {
		return super.connectionStatusRedirect(providerId, request);
	}
	
	
	
}
