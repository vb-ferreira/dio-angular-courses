import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges {
  @Input() nome: string = '';  // valor a ser recebido do parent 

  constructor() {
    console.log('1: constructor');
  }

  ngOnInit(): void {
    console.log('2: onInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('3: onChange');
  }
}
