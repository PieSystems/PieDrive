/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import com.dropbox.core.DbxException;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.ListFolderResult;
import java.security.Principal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Svetoslav Videnov <s.videnov@dsg.tuwien.ac.at>
 */
@RestController
public class HelloWorldController {
	
	@RequestMapping("/hello")
	public String helloWorld(Principal user) {
		System.out.println(user.getName());
		return "Hello Resources!";
	}
	
	@Autowired
	private ConnectionRepository connectionRepository;
	
	@RequestMapping("/list")
	public ListFolderResult listDropBoxFiles() throws DbxException {
		DbxClientV2 client = connectionRepository.getPrimaryConnection(DbxClientV2.class).getApi();
		ListFolderResult res = client.files().listFolder("");
		return res;
	}
}
