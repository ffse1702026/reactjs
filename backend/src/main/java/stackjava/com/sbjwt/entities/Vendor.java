package stackjava.com.sbjwt.entities;

public class Vendor {
	
	private String id;
	private String name;
	private String mobile;
	private String phone;
	private String address;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Vendor(String id, String name, String mobile, String phone, String address) {
		super();
		this.id = id;
		this.name = name;
		this.mobile = mobile;
		this.phone = phone;
		this.address = address;
	}
	public Vendor(String name, String mobile, String phone, String address) {
		super();
		this.name = name;
		this.mobile = mobile;
		this.phone = phone;
		this.address = address;
	}
	public Vendor() {
		super();
	}
	
	

}
