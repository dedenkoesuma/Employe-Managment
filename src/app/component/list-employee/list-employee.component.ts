//Core
import { AfterViewInit, Component, ViewChild } from '@angular/core';
//Models
import { Employee, dataEmployee } from '../../shared/models/employee.model';
// Cdk
import { LiveAnnouncer } from '@angular/cdk/a11y';
// Angular Material
import { MatSort, MatSortModule,Sort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';


@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, MatButtonModule,RouterLink,MatIcon],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.css'
})
export class ListEmployeeComponent implements AfterViewInit {
  displayedColumns: string[] = ['username', 'email', 'status','details'];
  dataSource = new MatTableDataSource<Employee>(dataEmployee);
  AddData = [...dataEmployee]
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private _liveAnnouncer: LiveAnnouncer, private _snackBar: MatSnackBar) {}

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatTable) table: MatTable<Employee> | any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addData() {
    const randomElementIndex = Math.floor(Math.random() * dataEmployee.length);
    this.AddData.push(dataEmployee[randomElementIndex]);
    this.table.renderRows();
    this.showSnackBar('Data has been Updated successfully!', 'primary');
  }

  removeData() {
    if (window.confirm('Are you sure you want to remove data?')) {
      this.AddData.pop();
      this.table.renderRows();
      this.showSnackBar('Data has been removed successfully!', 'warn');
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
