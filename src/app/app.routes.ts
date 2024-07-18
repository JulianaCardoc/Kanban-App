import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { BoardsComponent } from './modules/boards/boards/boards.component';
import { BoardComponent } from './modules/boards/board/board.component';
import { TableComponent } from './modules/users/table/table.component';
import { LayoutComponent } from './modules/layout/components/layout/layout.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ForgotPasswordComponent } from './modules/auth/pages/forgot-password/forgot-password.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import { RecoveryComponent } from './modules/auth/pages/recovery/recovery.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
      },
      
      {
        path: 'boards',
        component: BoardsComponent,
      },
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'users',
        component: TableComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      }
    ],
    
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
];
