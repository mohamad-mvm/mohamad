import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-my-slider',
  templateUrl: './my-slider.component.html',
  styleUrls: ['./my-slider.component.scss']
})
export class MySliderComponent implements OnInit {
  _silderValue: number;

  @Input()
  get silderValue(): number {
    return this._silderValue;
  }
  set silderValue(e: number) {
    this._silderValue = e;
    this.silderValueChange.emit(e);
  }

  @Output() silderValueChange = new EventEmitter<number>();

  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() {}

  ngOnInit() {}

}
