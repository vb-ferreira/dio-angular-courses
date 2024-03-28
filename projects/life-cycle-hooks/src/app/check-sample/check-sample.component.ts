import { Component, OnInit, 
         DoCheck, 
         AfterContentChecked,
         AfterViewChecked,
         AfterContentInit, 
         AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  standalone: true,
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})
export class CheckSampleComponent implements OnInit, 
  DoCheck, 
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit, 
  AfterViewInit
{
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }
  ngOnInit(): void {
    console.log('ngOnInit()');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }
  
  
}
