/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.uua;

import java.security.KeyPair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.KeyStoreKeyFactory;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
@Configuration
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Bean
	public JwtAccessTokenConverter jwtAccessTokenConverter() {
		JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
		//todo-sv: change password and key name
		KeyPair keyPair = new KeyStoreKeyFactory(
				new ClassPathResource("keystore.jks"),
				"piedrive".toCharArray())
				.getKeyPair("test");
		converter.setKeyPair(keyPair);
		return converter;
	}
	
	//private TokenStore tokenStore = new InMemoryTokenStore();

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory()
				.withClient("piedrive")
//				.authorizedGrantTypes("authorization_code", "refresh_token",
//							"password").scopes("openid");
				.authorizedGrantTypes("password")
				.authorities("ROLE_CLIENT", "ROLE_TRUSTED_CLIENT")
				.scopes("piedrive")
				.resourceIds("piedrive")
				.accessTokenValiditySeconds(3600)
				//.refreshTokenValiditySeconds(160);
				.autoApprove(true);
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints)
			throws Exception {
		endpoints.authenticationManager(authenticationManager)
				//.tokenStore(tokenStore);
				.accessTokenConverter(jwtAccessTokenConverter());
	}

	@Override
	public void configure(AuthorizationServerSecurityConfigurer oauthServer)
			throws Exception {
//		oauthServer.tokenKeyAccess("permitAll()").checkTokenAccess(
//				"isAuthenticated()");
		oauthServer.allowFormAuthenticationForClients()
				.tokenKeyAccess("permitAll()");
				//.tokenKeyAccess("isAnonymous() || hasAuthority('ROLE_TRUSTED_CLIENT')")
				//.checkTokenAccess("hasAuthority('ROLE_TRUSTED_CLIENT')");
	}
}
//curl -X POST -vu piedrive:pdsecret http://localhost:9999/oauth/token -H "Accept: application/json" -d "password=password&username=user&grant_type=password&scope=read%20write&client_secret=pdsecret&client_id=piedrive"