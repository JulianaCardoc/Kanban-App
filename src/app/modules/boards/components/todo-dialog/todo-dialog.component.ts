import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose, faCheckToSlot, faBars, faClock, faCheckSquare, faTag, faUser } from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../../../components/btn/btn.component';
import { ToDo } from '../../../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  rta: boolean;
}

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

  todo: ToDo;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData,
  ) {
    this.todo = data.todo;
  }

  close() {
    this.dialogRef.close()
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
