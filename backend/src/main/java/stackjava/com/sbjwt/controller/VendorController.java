package stackjava.com.sbjwt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import stackjava.com.sbjwt.entities.Vendor;
import stackjava.com.sbjwt.service.VendorService;

@RestController
@CrossOrigin
public class VendorController {
	
	@Autowired
	private VendorService userService;

	/* ---------------- GET ALL USER ------------------------ */
	@RequestMapping(value = "/vendors", method = RequestMethod.GET)
	public ResponseEntity<List<Vendor>> getAllVendor() {
		return new ResponseEntity<List<Vendor>>(userService.findAll(), HttpStatus.OK);
	}

	/* ---------------- GET USER BY ID ------------------------ */
	@RequestMapping(value = "/vendors/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getVendorById(@PathVariable String id) {
		Vendor user = userService.findById(id);
		if (user != null) {
			return new ResponseEntity<Object>(user, HttpStatus.OK);
		}
		return new ResponseEntity<Object>("Not Found Vendor", HttpStatus.NO_CONTENT);
	}

	/* ---------------- CREATE NEW USER ------------------------ */
	@RequestMapping(value = "/vendors", method = RequestMethod.POST)
	public ResponseEntity<String> createVendor(@RequestBody Vendor user) {
		
		if (userService.add(user)) {
			return new ResponseEntity<String>("Created!", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<String>("Vendor Existed!", HttpStatus.BAD_REQUEST);
		}
	}

	/* ---------------- DELETE USER ------------------------ */
	@RequestMapping(value = "/vendors/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<String> deleteVendorById(@PathVariable String id) {
		userService.delete(id);
		return new ResponseEntity<String>("Deleted!", HttpStatus.OK);
	}

}