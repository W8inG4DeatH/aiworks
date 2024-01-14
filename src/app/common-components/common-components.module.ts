import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { UserComponent } from 'src/app/common-components/user/user.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule
    ],
    declarations: [
        HtmlEditorComponent,
        UserComponent
    ],
    exports: [
        HtmlEditorComponent,
        UserComponent
    ]
})

export class CommonComponentsModule { }
