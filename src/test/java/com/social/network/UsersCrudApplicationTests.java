package com.social.network;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UsersCrudApplicationTests {

	@Test
	@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
	void contextLoads() {
	}

}
