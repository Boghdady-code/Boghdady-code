import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading:boolean = true;
  constructor() { }
  ngOnInit(): void {
       setTimeout(() => {
      this.loading=false;

    }, 1000);
  }

  title = 'portofolio';
}
