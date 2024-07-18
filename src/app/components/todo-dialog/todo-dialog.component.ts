import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faClock, faCheckSquare, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './todo-dialog.component.html',
  styleUrl: './todo-dialog.component.scss'
})
export class TodoDialogComponent {

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faClock = faClock;
  faTag = faTag;
  faUser = faUser;
  faCheckSquare = faCheckSquare;

  constructor(
    private dialogRef: DialogRef
  ) {}

  close() {
    this.dialogRef.close()
  }
}
