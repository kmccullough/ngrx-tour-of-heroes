import { Component, Input, OnInit } from '@angular/core';
import { Power } from '@core/models/power';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.scss']
})
export class PowersComponent implements OnInit {

  @Input() powers: Array<Power>;

  constructor() { }

  ngOnInit() {
  }

}
