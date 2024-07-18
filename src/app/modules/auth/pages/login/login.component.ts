import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BackgroundComponent, FooterComponent, HeaderComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
