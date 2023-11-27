import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @HostListener ('window:load')

    onWindowLoad(){
    document.querySelector('.loaded-txt')?.classList.add('moving-text');

  }
  constructor() { }
  ngOnInit(): void {

  }

}
