import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
  @Input() imagePath: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() id: string = '0';
  cardDate: Date = new Date;
}
