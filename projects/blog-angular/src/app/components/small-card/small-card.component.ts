import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'small-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input() imagePath: string = '';
  @Input() cardTitle: string = '';
  @Input() id: string = '0';
  cardDate: Date = new Date;
}
