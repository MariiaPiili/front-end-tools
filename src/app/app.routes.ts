import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { CalculatorComponent } from './calculator/calculator.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NewsListComponent } from './news-list/news-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    
    { path:"", redirectTo: '/hello', pathMatch: 'full' },
    { path: 'hello', component: HelloWorldComponent },
    { path: 'calculator', component: CalculatorComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'template', component: TemplateDrivenFormComponent},
    { path: 'reactive', component: ReactiveFormComponent},    
    {path: 'news-list', component: NewsListComponent},
    {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    { path: '**', component: PageNotFoundComponent }
];
