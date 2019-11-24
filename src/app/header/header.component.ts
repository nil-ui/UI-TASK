import { Component, OnInit ,Output, EventEmitter, HostListener} from '@angular/core';
import { SidebartoogleService } from '../sidebar/sidebartoogle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  

  constructor(
    private sideBarService: SidebartoogleService
  ) { }

  @HostListener('click')
  click() {
    this.sideBarService.toggle();
  }

}
