import { Component, OnInit,HostBinding, Input } from '@angular/core';
import { SidebartoogleService } from '../sidebar/sidebartoogle.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @HostBinding('class.is-open')
  isOpen = false;

  constructor(
    private sideBarService: SidebartoogleService
  ) { }

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
  }

}
