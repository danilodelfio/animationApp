import { Component, OnInit } from '@angular/core';
// import slide in/out animation
import { slideInOutAnimation } from '../../shared/slide-in.animation';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css'],
  // make slide in/out animation available to this component
  animations: [slideInOutAnimation],
    // attach the slide in/out animation to the host (root) element of this component
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class PortfolioListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
