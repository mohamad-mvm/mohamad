import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// COMPONENTS
import { MembersComponent } from './components/members/members.component';
import { NewsComponent } from './components/news/news.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayerComponent } from './admin-layer/admin-layer.component';
import { ArtComponent } from './components/art/art.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: AdminLayerComponent,
    data: {
      bre: 'member'
    },
    children: [
      {
        path: 'members',
        component: MembersComponent
      },
      { path: 'products', component: ProductsComponent },
      {
        path: 'news',
        component: NewsComponent,
        data: {
          bre: 'news'
        }
      },
      {
        path: 'art',
        component: ArtComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [
    //
    AdminLayerComponent,

    MembersComponent,
    NewsComponent,
    ProductsComponent,
    ArtComponent
  ],
  exports: [MembersComponent, NewsComponent, ProductsComponent]
})
export class AdminModule {}
