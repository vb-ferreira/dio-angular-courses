import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
  estilo: string = 'disable';
  item: string = '';

  trocar() {
    console.log(this.item)
    if (this.estilo == 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
