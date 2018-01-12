import { Component, AfterContentInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { IntroService } from './intro.service';
import { TweenLite, Elastic, TimelineLite } from 'gsap';

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
      }, 1000); //1000
    },3000);  //3000
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
      case 2:
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
    let laY = letters[0].getBoundingClientRect().height * this.imageResizeFactor * -1;
    let laX = (letters[8].getBoundingClientRect().right - letters[0].getBoundingClientRect().left)/5*this.imageResizeFactor;

    for(let i=0;i<5;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        y:laY,
        x:laX,
        delay:(i*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }
    
    for(let i=5;i<9;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        x:laX * -1,
        delay:(i*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }

    // Rearrange Customized
    let cusY = letters[9].getBoundingClientRect().height * this.imageResizeFactor *7/8;
    let cusX = (letters[18].getBoundingClientRect().right - letters[9].getBoundingClientRect().left)/8*this.imageResizeFactor;

    for(let i=9;i<14;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        x:cusX,
        delay:((i-9)*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }
    this.introService.sigmarLetters[13].style['fill'] = "#373732";
    
    for(let i=14;i<19;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        y:cusY,
        x:cusX*-1,
        delay:((i-9)*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }

    // Rearrange Websites
    let webY = letters[19].getBoundingClientRect().height * this.imageResizeFactor;
    let webX = (letters[26].getBoundingClientRect().right - letters[19].getBoundingClientRect().left)/5*this.imageResizeFactor;

    for(let i=19;i<22;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        y:webY*1.1,
        x:webX,
        delay:((i-19)*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }
    
    for(let i=22;i<27;++i) {
      let selector = ".letter" + i;
      TweenLite.to($(selector), 0.01, {
        y:webY*2,
        x:webX*-0.7,
        delay:((i-19)*0.05),
        ease: Elastic.easeInOut.config(1,0.2)
      });
    }

    // Move click
    TweenLite.to($(".click-span"), 0.02, {
      top:'10vh',
    });

    new TimelineLite()
      .add(TweenLite.to($("#web"), 0.5, {opacity:1}))
      .add(TweenLite.to($("#web"), 0.5, {opacity:0}))
    ;
  }

  scatter() {
    // larger scatter on second call
    let yPotential = this.playgroundHeight*this.imageResizeFactor/(10/this.rearrangeIndex);
    let xPotential = this.playgroundWidth*this.imageResizeFactor/(10/this.rearrangeIndex);
    console.log(xPotential + " " + yPotential);

    this.introService.sigmarLetters.forEach((letter, i)=>{
      let rgb = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255) + ")";
      let rotate =0;
      if(i%5==0) {
        rotate = Math.floor(Math.random()*360);
      }

      switch(i%4) {
        case 0:
          TweenLite.to($("."+letter.className), 0.1, {
//            y:Math.floor(Math.random()*yPotential*-1),
            y:Math.floor(yPotential*-1),
            opacity:Math.random().toFixed(1), 
            scale:Math.random()*2,
            fill:rgb,
            rotation:rotate,
          });
          break;
        case 1:
          TweenLite.to($("."+letter.className), 0.1, {
            x:Math.floor(xPotential), 
//            x:Math.floor(Math.random()*xPotential), 
            opacity:Math.random().toFixed(1), 
            scale:Math.random()*2,
            fill:rgb,
            rotation:rotate,
          });
          break;
        case 2:
          TweenLite.to($("."+letter.className), 0.1, {
            y:Math.floor(yPotential), 
//            y:Math.floor(Math.random()*yPotential), 
            opacity:Math.random().toFixed(1), 
            scale:Math.random()*2,
            fill:rgb,
            rotation:rotate,
          });
          break;
        case 3:
          TweenLite.to($("."+letter.className), 0.1, {
            x:Math.floor(xPotential*-1), 
//            x:Math.floor(Math.random()*xPotential*-1), 
            opacity:Math.random().toFixed(1), 
            scale:Math.random()*2,
            fill:rgb,
            rotation:rotate,
          });
          break;
        }
    });

    // Move click
    if(this.rearrangeIndex==1) {
      TweenLite.to($(".click-span"), 0.02, {left:'-15vw', top:'10vh'});
    } else {
      TweenLite.to($(".click-span"), 0.02, {left:'15vw', top:'60vh'});
    }
  }
}
