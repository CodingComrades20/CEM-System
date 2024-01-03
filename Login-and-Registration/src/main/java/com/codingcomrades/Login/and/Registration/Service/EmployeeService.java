package com.codingcomrades.Login.and.Registration.Service;

import com.codingcomrades.Login.and.Registration.Dto.EmployeeDto;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {

    String addEmployee(EmployeeDto employeeDto);
}
