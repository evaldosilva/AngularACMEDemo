import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star-component/star.component';
import { ConvertToSpacesPipes } from './convert-to-spaces.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipes
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipes
  ]
})
export class SharedModule { }
