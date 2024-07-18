import { Component, inject, signal } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table'
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DataSourceUser } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CommonModule, CdkTableModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  dataSource = new DataSourceUser();
  columns: string[] = ['id', 'avatar', 'name', 'email'];

  constructor() {
    this.dataSource.init([
      {
        id: 1,
        name: 'User 1',
        email: 'mail@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      },
      {
        id: 2,
        name: 'User 2',
        email: 'mail2@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      },
      {
        id: 3,
        name: 'User 3',
        email: 'mail3@mail.com',
        avatar: 'https://api.lorem.space/image/face?w=150&h=150'
      }
    ]);
  }
}
