import { AfterViewInit,
  Component,
  ViewChildren,
  QueryList, } from '@angular/core';
import { ProfileGridComponent } from '../gridbox/profile-grid.component';
import { boxDataArray } from '../gridbox-data';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent 
  implements AfterViewInit {
  @ViewChildren(ProfileGridComponent)
  chldComponentElement!: QueryList<ProfileGridComponent>;

  boxData = boxDataArray;
  startIndex = 2;

  ngAfterViewInit() {
    const selectedComponent = this.chldComponentElement.toArray()[4];
    selectedComponent.setflag();
  }

}
