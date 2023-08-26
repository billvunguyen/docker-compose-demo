import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-some-component',
  template: `
    <button (click)="navigateToDataComponent()">Go to Data</button>
  `
})
export class SomeComponent {
  constructor(private router: Router) {}

  navigateToDataComponent() {
    this.router.navigate(['/data']);
  }
}