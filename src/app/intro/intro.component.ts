import { Component, AfterContentInit } from '@angular/core';
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
        this.rearrange0();
        break;

      default:
        console.log("No rearrange method found");
        break;
    }
    this.rearrangeIndex++;
  }

  rearrange0() {
    let letters = document.getElementsByTagName("path");

    // Rearrange Limor Agam
    let laYTranslation = letters[0].getBoundingClientRect().height * this.imageResizeFactor;
    let laXTranslation = (letters[8].getBoundingClientRect().right - letters[0].getBoundingClientRect().left)/6*this.imageResizeFactor;

    let limorTranslationString = "translateY(-" + laYTranslation + "px) translateX(" + laXTranslation + "px)";
    let agamTranslationString = "translateX(-" + laXTranslation + "px)";

    for(let i=0;i<5;++i) {
      this.introService.sigmarLetters[i].style['transform'] = limorTranslationString;
    }
    
    for(let i=5;i<9;++i) {
      this.introService.sigmarLetters[i].style['transform'] = agamTranslationString;
    }

    // Rearrange Customized
    let cusYTranslation = letters[9].getBoundingClientRect().height * this.imageResizeFactor;
    let cusXTranslation = (letters[18].getBoundingClientRect().right - letters[9].getBoundingClientRect().left)/6*this.imageResizeFactor;

    let custoTranslationString = "translateX(" + cusXTranslation + "px)";
    let mizedTranslationString = "translateY(" + cusYTranslation + "px) translateX(-" + cusXTranslation + "px)";

    for(let i=9;i<14;++i) {
      this.introService.sigmarLetters[i].style['transform'] = custoTranslationString;
    }
    
    for(let i=14;i<19;++i) {
      this.introService.sigmarLetters[i].style['transform'] = mizedTranslationString;
    }

    this.introService.sigmarLetters[13].style['fill'] = "#88aa00";

    // Rearrange Websites
    let webYTranslation = letters[19].getBoundingClientRect().height * this.imageResizeFactor;
    let webXTranslation = (letters[26].getBoundingClientRect().right - letters[19].getBoundingClientRect().left)/6*this.imageResizeFactor;

    let webTranslationString = "translateY(" + webYTranslation + "px) translateX(" + cusXTranslation + "px)";
    let sitesTranslationString = "translateY(" + (2*webYTranslation) + "px) translateX(-" + webXTranslation + "px)";

    for(let i=19;i<22;++i) {
      this.introService.sigmarLetters[i].style['transform'] = webTranslationString;
    }
    
    for(let i=22;i<27;++i) {
      this.introService.sigmarLetters[i].style['transform'] = sitesTranslationString;
    }

    this.introService.clickStyle['top'] = "10vh";

  }
}
