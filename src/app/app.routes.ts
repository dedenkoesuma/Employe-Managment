import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';

export const routes: Routes = [
    {
        path: 'list',
        component: ListEmployeeComponent,
    },
    {
        path: 'add',
        component:AddEmployeeComponent,
    }
];
