import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-css-checkbox',
  templateUrl: './css-checkbox.component.html',
  styleUrls: ['./css-checkbox.component.css']
})
export class CssCheckboxComponent implements OnInit {

  @Input()
  public checked: boolean;

  constructor() {
  }

  ngOnInit() {
    this.checked = false;
  }
}
