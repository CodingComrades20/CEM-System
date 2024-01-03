package com.codingcomrades.Login.and.Registration.Service.impl;

import com.codingcomrades.Login.and.Registration.Dto.EmployeeDto;
import com.codingcomrades.Login.and.Registration.Entity.Employee;
import com.codingcomrades.Login.and.Registration.Repo.EmployeeRepo;
import com.codingcomrades.Login.and.Registration.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

public class EmployeeIMPL implements EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    private EmployeeIMPL This;

    @Override
    public String addEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee(
                employeeDto.getEmployee_id(),
                employeeDto.getEmployee_name(),
                employeeDto.getEmail(),

                This.passwordEncoder.encode(employeeDto.getPassword())
        );

        employeeRepo.save(employee);
        return employee.getEmployee_name();
    }
}
