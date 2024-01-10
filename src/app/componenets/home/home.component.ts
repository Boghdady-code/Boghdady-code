import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  zooming: boolean = false;
  loading: boolean = false;
  @HostListener('window:scroll')
  onZooming() {
    if (window.scrollY > 0) {
      this.zooming = true;
      this.loading = true;
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
