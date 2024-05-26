import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from 'src/app/areas/dashboard/dashboard.module';
import { HtmlEditorComponent } from './common-components/html-editor/html-editor.component';
import { WidgetsPanelComponent } from 'src/app/areas/dashboard/widgets-panel/widgets-panel.component';
import { AiPromptingFrontendComponent } from './areas/ai-prompting-frontend/ai-prompting-frontend.component';

const routes: Routes = [
    { path: '', component: WidgetsPanelComponent },
    { path: 'dashboard', component: WidgetsPanelComponent },
    { path: 'ai-prompting-fes', component: AiPromptingFrontendComponent },
    // { path: 'list', component: ListPanelComponent },
    // { path: 'edition', component: ComixEditorComponent, canActivate: [EditionGuardGuard] },
    // { path: 'edition/:id', component: ComixEditorComponent, canActivate: [EditionGuardGuard] },
    // { path: 'html-editor', component: HtmlEditorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), DashboardModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}
