import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  get colors() {
    return {
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
      'text-gray-700': this.color === 'gray-light',
      'bg-succes-700': this.color === 'success',
      'hover:bg-succes-800': this.color === 'success',
      'focus:ring-succes-300': this.color === 'success',
      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light'

    }
  }
}
