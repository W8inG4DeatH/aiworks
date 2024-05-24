import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WidgetsPanelComponent } from 'src/app/areas/dashboard/widgets-panel/widgets-panel.component';

@NgModule({
    declarations: [WidgetsPanelComponent],
    imports: [FlexLayoutModule, CommonModule, FormsModule],
})
export class DashboardModule {}
