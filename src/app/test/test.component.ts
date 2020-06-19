import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

export interface RequiredInput { [key: string]: string; }

@Component({
  selector: 'app-test[requiredInput]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {

  @Input()
  requiredInput!: RequiredInput;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit: ', this.requiredInput);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('ngOnChanges: ', this.requiredInput);
  }

}
