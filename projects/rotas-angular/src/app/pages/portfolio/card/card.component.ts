import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void {
    setInterval(() => {
      this.router.navigate(['/'])
    }, 5000)
  }

}
