import { Routes } from '@angular/router';
import { SignupLoginPageComponent } from './pages/signup-login-page/signup-login-page.component';
import { FilePageComponent } from './pages/file-page/file-page.component';

// export const routes: Routes = [
//     { path: '', component: FilePageComponent },
//     { path: 'signup-login', component: SignupLoginPageComponent },

// ];

const routeConfig: Routes = [
    { path: '', component: FilePageComponent, title: 'File Page' },
    { path: 'signup-login', component: SignupLoginPageComponent },
];
export default routeConfig;
