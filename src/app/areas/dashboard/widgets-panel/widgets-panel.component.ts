import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-widgets-panel',
  templateUrl: './widgets-panel.component.html',
  styleUrls: ['./widgets-panel.component.scss']
})
export class WidgetsPanelComponent implements OnInit {
  public prompt: string = '';
  public promptAnswer: any = null;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.prompt = 'Opowiedz krótki kawał po polsku.';
  }

  async OnSendPromptClick() {
    const gptResponse: any = await this.apiService.SendPrompt(this.prompt);
    this.promptAnswer = gptResponse.choices[0].message.content;
    console.log('this.promptAnswer:', this.promptAnswer, gptResponse);
  }
}
