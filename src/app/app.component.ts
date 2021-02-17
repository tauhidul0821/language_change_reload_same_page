import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }
  title = 'loadsamepage';

  changeTosellBook() {
    let currentUrl = this.router.url;
    console.log('currentUrl', currentUrl);

    let goToUrl = currentUrl.replace('/buyBook', '/sellBook');
    console.log('goToUrl', goToUrl);

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([goToUrl]);

    });

  }

  changeTobuyBook() {
    let currentUrl = this.router.url;
    console.log('currentUrl', currentUrl);

    let goToUrl = currentUrl.replace('/sellBook', '/buyBook');
    console.log('goToUrl', goToUrl);

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([goToUrl]);
    });
  }
}
