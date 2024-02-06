import { Routes } from '@angular/router';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DetailEmployeeComponent } from './component/detail-employee/detail-employee.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'list',
        component: ListEmployeeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'add',
        component:AddEmployeeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'detail/:id', 
        component: DetailEmployeeComponent, 
        canActivate: [AuthGuard]
    }
];
