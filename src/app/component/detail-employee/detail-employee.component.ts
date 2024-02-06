import { Component, Input } from '@angular/core';
import { Employee, dataEmployee } from '../../shared/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detail-employee',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent {
  employee: Employee | undefined;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Mengambil data Employee berdasarkan id dari URL
    const id = this.route.snapshot.params['id'];
    this.employee = dataEmployee.find((emp: { id: number; }) => emp.id === +id);
  }

  navigateBack(): void {
    // Mengarahkan kembali ke Halaman Daftar Employee
    this.router.navigate(['/list']);
  }

  formatCurrency(amount: number): string {
    // Memformat basicSalary menjadi format mata uang Rp. xx.xxx.xx
    return 'Rp. ' + amount.toLocaleString('id-ID');
  }
}

