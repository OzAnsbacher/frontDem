import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { RouterOutlet } from '@angular/router';
// import { routes } from './app.routes';

// import { provideRouter } from '@angular/router';
// import { bootstrapApplication } from '@angular/platform-browser';

import { FilePageComponent } from './pages/file-page/file-page.component';
import { HeaderComponent } from './cmps/c-header/c-header.component';
import { FooterComponent } from "./cmps/c-footer/c-footer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule ,HeaderComponent, FooterComponent],
  // imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title = 'frontend';
}
// bootstrapApplication(AppComponent, { 
//   providers: [provideRouter(routes)]
// }); 
