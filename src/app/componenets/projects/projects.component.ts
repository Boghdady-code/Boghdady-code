import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  fade: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 1600) {
      this.fade = true;
    }
  }
  constructor() {}
  ngOnInit(): void {}
}
