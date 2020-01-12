import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { RegisterRoleComponent } from './components/register-role/register-role.component';
import { MessageComponent } from './components/message/message.component';
import { HttpService } from './services';

const routes: Routes = [
  { path: 'roles/create', component: RegisterRoleComponent },
  { path: 'messages', component: MessageComponent }
];

@NgModule({
  imports: [
    //
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RegisterRoleComponent, MessageComponent],
  providers: [HttpService]
})
export class MvmFormModule {}
