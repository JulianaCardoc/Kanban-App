import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLinkWithHref, BtnComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
