package com.bigcenter.app.payloads;

import lombok.Data;

@Data
public class RegisterRequest {
    private String fullname;
    private String password;
    private String email;
    private String phone;
}
