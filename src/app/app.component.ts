import { Component, OnInit } from '@angular/core';

import * as introJs from 'intro.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  

  constructor(){}

  ngOnInit(): void {
    introJs().addHints();
  }

  startTour() {

    var intro: any = introJs().addHints();
    
    intro.setOptions({
      steps: [
        {
          element: '#tool1',
          intro: 'Aca es el paso 1',
          position: 'top',
        },
        {
          element: '#tool2',
          intro: 'Mor aca es el paso 2',
          position: 'bottom',
        },
        {
          element: '#tool3',
          intro: 'Mor aca es el paso 3',
          position: 'left',
        },
        {
          element: '#tool4',
          intro: 'Mor aca es el paso 4',
          position: 'right',
        },
      ],
      showBullets: false,
      showButtons: true,
      exitOnOverlayClick: true,
      keyboardNavigation: true,
    });

    
    intro.start();
  }
}
