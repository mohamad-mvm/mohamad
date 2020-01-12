import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersianCurrencyPipe } from '@shared/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PersianCurrencyPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PersianCurrencyPipe, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
