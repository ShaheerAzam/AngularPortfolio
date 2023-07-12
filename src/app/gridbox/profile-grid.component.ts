import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Gridbox } from '../gridbox';

@Component({
  selector: 'app-gridbox',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css']
})
export class ProfileGridComponent {
  @Input() boxContent!: Gridbox;
  @ViewChild('textdiv', { static: true }) sdiv!: ElementRef;
  flag: boolean = false;

  setflag() {
    this.flag = true;
  }

}
