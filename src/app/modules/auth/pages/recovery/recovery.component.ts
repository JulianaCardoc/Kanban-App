import { Component } from '@angular/core';
import { BackgroundComponent } from '../../components/background/background.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RecoveryFormComponent } from '../../components/recovery-form/recovery-form.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [BackgroundComponent, HeaderComponent, RecoveryFormComponent, FooterComponent],
  templateUrl: './recovery.component.html',
  styleUrl: './recovery.component.scss'
})
export class RecoveryComponent {

}
