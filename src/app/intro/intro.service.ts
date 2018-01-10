import { IntroImageModel } from './introImage.model';
export class IntroService {
    images = {
        'sketch': new IntroImageModel("image sketch", "sketch", "/assets/images/sketch.svg", "Limor Agam Customized Websites"),
        'outline': new IntroImageModel("image outline", "outline", "/assets/images/outline.svg", "Limor Agam Customized Websites"),
        'sigmar': new IntroImageModel("image sigmar", "sigmar", "/assets/images/sigmar.svg", "Limor Agam Customized Websites")
    }
}