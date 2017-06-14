import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from '../../shared/slide-in.animation';

@Component({
  selector: 'app-carousel-example',
  templateUrl: './carousel-example.component.html',
  styleUrls: ['./carousel-example.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
    // attach the slide in/out animation to the host (root) element of this component
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class CarouselExampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
