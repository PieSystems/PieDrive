/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import com.dropbox.core.DbxException;
import com.dropbox.core.v2.DbxClientV2;
import com.dropbox.core.v2.files.FileMetadata;
import com.dropbox.core.v2.files.FolderMetadata;
import com.dropbox.core.v2.files.ListFolderResult;
import com.dropbox.core.v2.files.Metadata;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.social.connect.ConnectionRepository;
import org.springframework.social.google.api.Google;
import org.springframework.social.google.api.drive.DriveFile;
import org.springframework.social.google.api.drive.DriveFilesPage;
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
	
	@RequestMapping("/list2")
	public DriveFilesPage listGoogleFiles() throws DbxException {
		Google client = connectionRepository.getPrimaryConnection(Google.class).getApi();
		DriveFilesPage res = client.driveOperations().getFiles("root", null);
		return res;
	}
	
	@RequestMapping("listAll")
	public Collection<SimpleFile> listAll() throws DbxException {
		Map<String, SimpleFile> res = new HashMap<>();
		
		for(Metadata m: listDropBoxFiles().getEntries()) {
			
			List<String> providers = new ArrayList<>();
			providers.add("dropbox");
			SimpleFile file = new SimpleFile(m.getName(), true, providers);
			
			if(m instanceof FileMetadata) {
				file.setFolder(false);
			}
			
			res.put(getKey(file.getName(), file.isFolder()), file);
		}
		
		for(DriveFile file: listGoogleFiles().getItems()) {
			SimpleFile sFile = res.get(getKey(file.getTitle(), file.isFolder()));
			
			if(sFile != null) {
				if(!sFile.getProviders().contains("google")) {
					sFile.getProviders().add("google");
				}
			} else {
				List<String> providers = new ArrayList<>();
				providers.add("google");
				res.put(getKey(file.getTitle(), file.isFolder()), 
						new SimpleFile(file.getTitle(), file.isFolder(), 
								providers));
			}
		}
		
		return res.values();
	}
	
	private String getKey(String name, boolean folder) {
		if(folder) {
			return name + ":0";
		}
		
		return name +":1";
	}
}
