import {Component, OnInit} from '@angular/core';
import {HeaderService} from './shared/services/header.service';
import {Router} from '@angular/router';
import {Constants} from './shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FastwaysMachine';
  session = 'Iniciar Sesion';
  showDropdown = false;
  isUser = false;

  constructor(private router: Router, private headerService: HeaderService) {
  }

  ngOnInit(): void {
    this.headerService.actualName.subscribe(name => {
      this.session = name;
    });
    this.headerService.dropdown.subscribe(show => {
      this.showDropdown = show;
    });
    this.headerService.isUser.subscribe(show => {
      this.isUser = show;
    });
  }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  public logout() {
    localStorage.removeItem('userFM');
    localStorage.removeItem('roleFM');
    this.router.navigate([Constants.URLS.PRINCIPAL]);
  }
}
