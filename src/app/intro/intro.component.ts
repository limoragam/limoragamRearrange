import { Component, AfterContentInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IntroService } from './intro.service';
import { setTimeout } from 'timers';

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
export class IntroComponent implements AfterContentInit {

  currentImage = 'sketch';
  translateString = "0";
  playgroundWidth = 0;
  playgroundHeight = 0;
  originalImageWidth = 0;
  originalImageHeight = 0;
  imageResizeFactor = 1;
  rearrangeIndex = 0;

  constructor(public introService:IntroService) {}

  // Calculations and change of width/height which are actually bound to children
  // should be done after content init.
  // If it is later (AfterViewInit), there is an ExpressionChangedAfterItHasBeenCheckedError
  // thrown about inconsistent values between the parent/child components (dev only)
  ngAfterContentInit() {
    this.originalDimensionsSet.then(()=>{
        this.getPlaygroundDimensions();
        this.translateImages();
      }      
    );
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      this.currentImage = 'outline';
      setTimeout(()=>{
        this.currentImage = 'sigmar';
        this.introService.clickStyle.opacity = 1;
      }, 200); //1000
    },200);  //3000
  }

  // Set original dimensions by Promise so that things can be done after dimensions are set
  originalDimensionsSet = new Promise(
    (resolve, reject)=>{
      let image = new Image();
      image.onload = ()=>{
        this.originalImageHeight = image.height;
        this.originalImageWidth = image.width;
        resolve();
      }
      image.src = this.introService.images.sketchSrc;
    }
  );

  getPlaygroundDimensions() {
    this.playgroundWidth = $(".sketch").width();
    this.playgroundHeight = $(".sketch").height();
    this.imageResizeFactor = this.playgroundHeight/this.originalImageHeight;
  }

  translateImages() {
    // image height is the same as container height
    // need to calc image width, subtract container width and divide by 2 to get translate
    let imageWidth = this.playgroundHeight * this.originalImageWidth / this.originalImageHeight;
    let offset = (imageWidth-this.playgroundWidth) / 2;
    this.translateString = "translateX(-" + offset + "px)";
}

  onResize(event:Event) {
    this.getPlaygroundDimensions();
    this.translateImages();
  }

  onClick() {
    switch(this.rearrangeIndex) {
      case 0:
        this.rearrange();
        break;

      case 1:
        this.scatter();
        break;

      default:
        console.log("No rearrange method found");
        break;
    }
    this.rearrangeIndex++;
  }

  rearrange() {
    let letters = document.getElementsByTagName("path");

    // Rearrange Limor Agam
    let laYTranslation = letters[0].getBoundingClientRect().height * this.imageResizeFactor;
    let laXTranslation = (letters[8].getBoundingClientRect().right - letters[0].getBoundingClientRect().left)/5*this.imageResizeFactor;

    let limorTranslationString = "translateY(-" + laYTranslation + "px) translateX(" + laXTranslation + "px)";
    let agamTranslationString = "translateX(-" + laXTranslation + "px)";

    for(let i=0;i<5;++i) {
      this.introService.sigmarLetters[i].style['transform'] = limorTranslationString;
    }
    
    for(let i=5;i<9;++i) {
      this.introService.sigmarLetters[i].style['transform'] = agamTranslationString;
    }

    // Rearrange Customized
    let cusYTranslation = letters[9].getBoundingClientRect().height * this.imageResizeFactor *7/8;
    let cusXTranslation = (letters[18].getBoundingClientRect().right - letters[9].getBoundingClientRect().left)/8*this.imageResizeFactor;

    let custoTranslationString = "translateX(" + cusXTranslation + "px)";
    let mizedTranslationString = "translateY(" + cusYTranslation + "px) translateX(-" + cusXTranslation + "px)";

    for(let i=9;i<14;++i) {
      this.introService.sigmarLetters[i].style['transform'] = custoTranslationString;
    }
    
    for(let i=14;i<19;++i) {
      this.introService.sigmarLetters[i].style['transform'] = mizedTranslationString;
    }

    this.introService.sigmarLetters[13].style['fill'] = "#373732";

    // Rearrange Websites
    let webYTranslation = letters[19].getBoundingClientRect().height * this.imageResizeFactor;
    let webXTranslation = (letters[26].getBoundingClientRect().right - letters[19].getBoundingClientRect().left)/5*this.imageResizeFactor;

    let webTranslationString = "translateY(" + webYTranslation + "px) translateX(" + cusXTranslation + "px)";
    let sitesTranslationString = "translateY(" + (2*webYTranslation) + "px) translateX(-" + webXTranslation *7/8 + "px)";

    for(let i=19;i<22;++i) {
      this.introService.sigmarLetters[i].style['transform'] = webTranslationString;
    }
    
    for(let i=22;i<27;++i) {
      this.introService.sigmarLetters[i].style['transform'] = sitesTranslationString;
    }

    // Move click
    this.introService.clickStyle['top'] = "10vh";
  }

  scatter() {
    // delete this.introService.sigmarLetters[0].style['transform'];
    // this.introService.sigmarLetters[0].style['position'] = 'fixed';
    // this.introService.sigmarLetters[0].style['top'] = 10;
    // var root = document.getElementById("svg");
    // var path = document.getElementById("path");
    // var point = root.createSVGPoint();
    // point.x = 0;  // replace this with the x co-ordinate of the path segment
    // point.y = 0;  // replace this with the y co-ordinate of the path segment
    // var matrix = path.getTransformToElement(root);
    // var position = point.matrixTransform(matrix);
    
    // alert(position.x + ", " + position.y);
    }
}
