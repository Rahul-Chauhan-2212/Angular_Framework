import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent {
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {
    this.employee = new Employee();
  }

  onSubmit() {
    this.employeeService
      .save(this.employee)
      .subscribe((result) => this.gotoEmplyoeesList());
  }

  gotoEmplyoeesList() {
    this.router.navigate(['/employees']);
  }
}
