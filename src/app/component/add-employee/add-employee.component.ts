//default import
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
//validator
import { dateValidator } from '../../shared/validate/validate.forms';
//angular material
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { Employee, dataEmployee } from '../../shared/models/employee.model';

@Component({
  selector: 'app-add-employee',
  imports: [ReactiveFormsModule, NgFor, RouterLink, MatButtonModule],
  standalone: true,
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  // Dummy data untuk dropdown list group
  dummyGroups: string[] = ['Engineering','Sales','Marketing','HR','Finance','Talent','Crew','Social Media','Desain Grafis', 'IT'];

  constructor(private fb: FormBuilder,private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthDate: ['', Validators.required, dateValidator],
      basicSalary: ['', [Validators.required, Validators.min(0)]],
      group: ['', Validators.required]
    });
  }
  saveEmployee(): void {
    if (this.employeeForm.valid) {
      this.showSnackBar('Data has been added successfully!', 'primary');
    } else {
      this.showSnackBar('Please fill in all the fields correctly', 'warn');
    }
  }

  showSnackBar(message: string, panelClass: string) {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: [panelClass],
    });
  }
  
}
