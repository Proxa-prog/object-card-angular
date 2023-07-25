import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class Swiper implements OnInit {
  images: any = [];
  sliderContainer!: HTMLElement | null;
  innerSlider: HTMLElement | null;
  pressed = false;
  startX!: any;
  x: any;

  constructor(private ElByClassName: ElementRef) {
    this.images =  [
      'assets/images/image1.jpg',
      'assets/images/image2.png',
      'assets/images/image3.jpg',
      'assets/images/image1.jpg',
      'assets/images/image2.png',
      'assets/images/image3.jpg',
    ];
  }

  grabbing(e: any) {
    this.pressed = true;
    this.startX = e.offsetX - this.innerSlider!.offsetLeft;
    this!.sliderContainer!.style!.cursor = "grabbing";
  }

  enter() {
    this!.sliderContainer!.style.cursor = "grab";
  }

  up() {
    this!.sliderContainer!.style.cursor = "grab";
    this.pressed = false;
  }

  mouseout() {
    this!.sliderContainer!.style.cursor = "grab";
    this.pressed = false;
  }

  checkBoundary() {
    let outer = this!.sliderContainer!.getBoundingClientRect();
    let inner = this!.innerSlider!.getBoundingClientRect();

    if (parseInt(this!.innerSlider!.style.left) > 0) {
      this!.innerSlider!.style.left = "0px";
    }

    if (inner.right < outer.right) {
      this!.innerSlider!.style.left = `-${inner.width - outer.width}px`;
    }
  }

  move(e: any) {
    if (!this.pressed) return;
    e.preventDefault();

    this.x = e.offsetX;
    this!.innerSlider!.style.left = `${this.x - this.startX}px`;
    this.checkBoundary();
  }

  buttonRightClick() {
    this!.innerSlider!.style.left = `${parseInt(this!.innerSlider!.style.left, 10) - 110}px`;
    this.checkBoundary();
  }

  buttonLeftClick() {
    this!.innerSlider!.style.left = `${parseInt(this!.innerSlider!.style.left, 10) + 110}px`;
    this.checkBoundary();
  }

  ngOnInit() {
    this.sliderContainer = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.slider-container');
    this.innerSlider = (<HTMLElement>this.ElByClassName.nativeElement).querySelector('.inner-slider');
  }
}


