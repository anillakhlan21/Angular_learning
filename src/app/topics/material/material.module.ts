import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'

import { MaterialComponent } from './material.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    MaterialComponent,
    ToolbarComponent

  ],
  imports: [
    RouterModule,
    CommonModule,
    material
  ],
  exports: [ material ]
})
export class MaterialModule { }
