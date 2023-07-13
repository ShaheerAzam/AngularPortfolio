import { Component, ElementRef, Input, ViewChild ,HostListener, INJECTOR} from '@angular/core';
import { Gridbox } from '../gridbox';

@Component({
  selector: 'app-gridbox',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css']
})
export class ProfileGridComponent {
  @Input() boxContent!: Gridbox;
  @Input() responsivePadding: boolean = false;

  

  @ViewChild('textdiv', { static: true }) sdiv!: ElementRef;
  flag: boolean = false;

  setflag() {
    this.flag = true;
  }
   @HostListener('window:resize')
  onWindowResize() {
     if (this.responsivePadding) {
       if(window.innerWidth<1100)
       this.updatePadding();
     }

   }
  
  updatePadding() { 
    this.boxContent.padding = '47px 157px';
  }
  // xon() {
  //   if (window.innerWidth < 1200) {
  //     this.boxContent.displayStyle = 'block';
  //     console.log('hhhhhhhhhh');
  //   }
  // }


}


