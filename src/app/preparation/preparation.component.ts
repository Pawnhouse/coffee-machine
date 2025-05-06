import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-preparation',
  imports: [],
  templateUrl: './preparation.component.html',
  styleUrl: './preparation.component.css'
})
export class PreparationComponent implements OnInit {
  status: string = 'Готовится...';

  ngOnInit(): void {
    setTimeout(() => {
      this.status = 'Напиток готов!';
    }, 5000);
  }
}
