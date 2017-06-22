/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.piesystems.piedrive.socialprovider;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author vauvenal5
 */
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SimpleFile {
	private String name;
	private boolean folder;
	private List<String> providers;
}
