import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  produtos: string[] = [];
  menuType: string = 'admin';

  constructor() {
    // Geralmente recebidos de uma API
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }
}
