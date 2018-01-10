import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IntroService } from './intro.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity:0}),
        animate("500ms 300ms", style({opacity:1})) 
      ]),
    ]),
  ]
})
export class IntroComponent implements AfterViewInit {

  currentImage = 'sketch';
  translateString = "0";
  containerWidth = 0;
  containerHeight = 0;

  constructor(public introService:IntroService) {}

  ngAfterViewInit() {
    this.onResize();

    setTimeout(()=>{
      this.currentImage = 'outline';
      setTimeout(()=>{
        this.currentImage = 'sigmar';
      }, 2000);
    },2000);
  }

  translateImages() {
    let image = new Image();
    image.onload = ()=> {
      // image height is the same as container height
      // need to calc image width, subtract container width and divide by 2 to get translate
      let imageWidth = this.containerHeight * image.width / image.height;
      let offset = (imageWidth-this.containerWidth) / 2;
      this.translateString = "translateX(-" + offset + "px)";
    }
    image.src = this.introService.images.sketch.src;
  }

  onResize() {
    this.containerWidth = $(".sketch").width();
    this.containerHeight = $(".sketch").height();
    this.translateImages();
  }
}
