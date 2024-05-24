import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { UserComponent } from 'src/app/common-components/user/user.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { AiPrompterComponent } from './ai-prompter/ai-prompter.component';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        FormsModule
    ],
    declarations: [
        HtmlEditorComponent,
        UserComponent,
        AiPrompterComponent
    ],
    exports: [
        HtmlEditorComponent,
        UserComponent,
        AiPrompterComponent
    ]
})

export class CommonComponentsModule { }
