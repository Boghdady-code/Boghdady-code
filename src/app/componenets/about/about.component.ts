import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor() {}
  aboutLoading = false;
  imageFading = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    console.log(window.scrollY);
    if (window.scrollY > 370) {
      this.aboutLoading = true;
      this.imageFading = true;
    }
  }

  ngOnInit(): void {}
}
