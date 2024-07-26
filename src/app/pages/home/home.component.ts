import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title: string = '';

  it = [1, 2, 3, 4, 5];

  count = 0;

  increament() {
    this.count++;
  }

  setTitle() {
    this.title = 'New Title';
  }
}
