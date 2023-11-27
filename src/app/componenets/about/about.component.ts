import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
      document.querySelector('.loaded-txt')?.classList.add('moving-text');
  }


  ngOnInit(): void {


  }

}
