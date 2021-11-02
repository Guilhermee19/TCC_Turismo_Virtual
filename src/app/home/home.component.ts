import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @ViewChild("card_screen", { static: false }) card_screen;

  cards: any;

  ngOnInit(): void {
    window.scrollTo(500, 0);
    // window.scrollTo({top: 0, behavior: 'smooth'});  
  }

  navigateTo(element: string) {
    this[element].nativeElement.scrollIntoView({ block: "start", behavior: "smooth" });
  
    const yOffset = -75; 
    const position = document.getElementById(element);
    const y = position.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.onunload = function(){ 
      window.scrollTo({top: y, behavior: 'smooth'});  
    }
  }

  navigateTop(){
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

    if(supportsNativeSmoothScroll == true){
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        window.scroll(0,0);
    }
  }
    
}
