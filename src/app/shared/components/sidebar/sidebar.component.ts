import { Component, OnInit } from '@angular/core';
import { PathService } from '../../path/path.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sidebarLinks = [
    {
      title: 'Planning',
      link: this.pathService.planning,
    },
    {
      title: 'Employees',
      link: this.pathService.employees,
    },
    {
      title: 'Shift Templates',
      link: this.pathService.shiftTemplates,
    },
  ];
  constructor(private pathService: PathService, public router: Router) {}

  ngOnInit(): void {}
}
