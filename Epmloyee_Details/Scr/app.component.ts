import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { Employee } from './models/employee.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employees: Employee[] = [];
  formData: Employee = { id: 0, name: '', email: '', phone: '' };
  isEditMode = false;

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.empService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Failed to load employees:', error);
      }
    });
  }

  onSubmit(): void {
    if (this.isEditMode && this.formData.id) {
      this.empService.updateEmployee(this.formData.id, this.formData).subscribe({
        next: (updatedEmployee) => {
          const index = this.employees.findIndex(emp => emp.id === updatedEmployee.id);
          if (index !== -1) {
            this.employees[index] = updatedEmployee;
          }
          alert('Employee updated successfully!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Failed to update employee:', error);
          alert('Failed to update employee!');
        }
      });
    } else {
      this.empService.addEmployee(this.formData).subscribe({
        next: (newEmp) => {
          this.employees.push(newEmp);
          alert('Employee added successfully!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Failed to add employee:', error);
          alert('Failed to add employee!');
        }
      });
    }
  }

  onEdit(employee: Employee): void {
    this.formData = { ...employee };
    this.isEditMode = true;
  }

  onDelete(id: number): void {
    this.empService.deleteEmployee(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
        alert('Employee deleted successfully!');
      },
      error: (error) => {
        console.error('Failed to delete employee:', error);
        alert('Failed to delete employee!');
      }
    });
  }

  resetForm(): void {
    this.formData = { id: 0, name: '', email: '', phone: '' };
    this.isEditMode = false;
  }
}
