import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'c-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './c-header.component.html',
  styleUrl: './c-header.component.scss'
})
export class HeaderComponent {
  user: { name: string; password?: string } = { name: "דוד", password: '1234' };
}
