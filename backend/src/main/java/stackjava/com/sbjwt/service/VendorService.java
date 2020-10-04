package stackjava.com.sbjwt.service;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import stackjava.com.sbjwt.entities.Vendor;

@Service
public class VendorService {
	public static List<Vendor> listUser = new ArrayList<Vendor>();
	static {
		Vendor userKai = new Vendor("1", "kai", "123-456-7890", "987-654-3210", "Da Nang");
		
		Vendor userSena = new Vendor("2", "sena", "123-456-7890", "987-654-3210", "Da Nang");
		
		listUser.add(userKai);
		listUser.add(userSena);
	}

	public List<Vendor> findAll() {
		return listUser;
	}

	public Vendor findById(String id) {
		for (Vendor user : listUser) {
			if (user.getId().equals(id)) {
				return user;
			}
		}
		return null;
	}

	public boolean add(Vendor user) {
//		for (Vendor userExist : listUser) {
//			if (user.getId().equals(userExist.getId()) || StringUtils.equals(user.getName(), userExist.getName())) {
//				return false;
//			}
//		}
		user.setId(String.valueOf(listUser.size() + 1));
		listUser.add(user);
		return true;
	}

	public void delete(String id) {
		listUser.removeIf(user -> user.getId().equals(id));
	}

	public Vendor loadUserByUsername(String username) {
		for (Vendor user : listUser) {
			if (user.getName().equals(username)) {
				return user;
			}
		}
		return null;
	}
}