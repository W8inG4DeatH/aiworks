import { Component, OnInit } from '@angular/core';
import { IMainMenuElement } from 'src/app/areas/areas.interfaces';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {

  public mainMenu: Array<IMainMenuElement> = [];

  constructor() { }

  ngOnInit(): void {
    this.InitMainMenu();
  }

  InitMainMenu() {
    this.mainMenu = [
      // {
      //     DisplayName: 'Dashboard',
      //     RouterLink: '/dashboard'
      // },
      {
        DisplayName: 'HTML Editor',
        RouterLink: '/html-editor'
      },
      {
        DisplayName: 'List',
        RouterLink: '/list'
      },
      // {
      //   DisplayName: 'Edition',
      //   RouterLink: '/edition'
      // }
    ]
  }

}
