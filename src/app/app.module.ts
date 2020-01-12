import { ToopakModule } from './toopak/toopak.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// NODE PACKAGES
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { SidebarModule } from 'ng-sidebar';

// COMPONENS
import { AppComponent } from './app.component';
import { MySliderComponent } from './my-slider/my-slider.component';
import { CartComponent } from './cart/cart.component';
import { AuthService } from './auth.service';

// SERVICES

const routes: Routes = [
  // {
  //   path: '',
  //   component: MySliderComponent
  //   // canActivate:[]
  // },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    // loadChildren: './admin/admin.module#AdminModule'
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('@MvmForm/mvm-form.module').then(m => m.MvmFormModule)
  },

  {
    path: '',
    loadChildren: () => import('./toopak/toopak.module').then(m => m.ToopakModule)
  },

  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  declarations: [AppComponent, MySliderComponent, CartComponent],
  imports: [
    //
    BrowserModule,
    HttpClientModule,
    NgbModule,
    Ng5SliderModule,
    ToopakModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
