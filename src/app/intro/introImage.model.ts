export class IntroImageModel {
    className:string;
    id:string;
    src:string;
    alt:string;

    constructor(className:string, id: string, src:string, alt:string) {
        this.className = className;
        this.id = id;
        this.src = src;
        this.alt = alt;
    }
}