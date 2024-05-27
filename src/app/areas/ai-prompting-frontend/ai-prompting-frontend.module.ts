import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AiPromptingFrontendComponent } from 'src/app/areas/ai-prompting-frontend/ai-prompting-frontend.component';

@NgModule({
    declarations: [AiPromptingFrontendComponent],
    imports: [FlexLayoutModule, CommonModule, FormsModule],
})
export class AiPromptingFrontendModule {}
