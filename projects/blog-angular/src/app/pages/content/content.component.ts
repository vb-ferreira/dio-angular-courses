import { Component, Input } from '@angular/core';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [MenuBarComponent, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() imagePath: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(value => 
      this.id = value.get('id')
    )
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];
    
    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.imagePath = result.photo;
  }
}
