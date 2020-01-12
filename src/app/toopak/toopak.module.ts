import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from '@toopak/header';
import { FooterComponent } from '@toopak/footer';
import { BodyComponent } from '@toopak/body';
import { FullLayoutComponent } from '@toopak/full-layout';
import { LoginComponent } from '@toopak/login';
import { SignupComponent } from '@toopak/signup';

const routes: Routes = [

  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: '',
        component: BodyComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'balance',
        component: LoginComponent
      },
      {
        path: 'credit',
        component: LoginComponent
      },
      {
        path: 'matches',
        component: LoginComponent
      },
      {
        path: 'debit',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    //   {
    //     path: 'art',
    //     component: ArtComponent
    //   }
    ]
  }
];

@NgModule({
  declarations: [
    //
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    FullLayoutComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    //
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class ToopakModule {}
