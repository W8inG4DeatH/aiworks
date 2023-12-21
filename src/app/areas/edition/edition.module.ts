import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { ComixEditorComponent } from 'src/app/areas/edition/comix-editor/comix-editor.component';

@NgModule({
  declarations: [
    ComixEditorComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ]
})
export class EditionModule { }
