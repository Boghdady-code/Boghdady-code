import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }
  @ViewChild ('responsive') responsive!:ElementRef;
  @ViewChild ('line1') line1!:ElementRef;
  @ViewChild ('line2') line2!:ElementRef;
  @ViewChild ('line3') line3!:ElementRef;


  @HostListener ('window:scroll')
  @HostListener ('window:load')
  onWindowScroll(){
    if(window.scrollY > 0){
      document.querySelector('.header')?.classList.add('glassey');
    }else{
      document.querySelector('.header')?.classList.remove('glassey');
    }
  }
    onWindowLoad(){
    document.querySelector('.loaded-txt')?.classList.add('moving-text');

  }

  toggleMenu (){
    this.responsive.nativeElement.classList.toggle('active-burger');
    this.line1.nativeElement.classList.toggle('first');
    this.line2.nativeElement.classList.toggle('second');
    this.line3.nativeElement.classList.toggle('third');
  }

  toHome() {
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'});
  }
  toAbout() {
    document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
  }
  toProjects() {
    document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'});
  }
  toContact() {
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  }





  ngOnInit(): void {
  }

}
