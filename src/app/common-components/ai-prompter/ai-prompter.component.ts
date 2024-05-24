import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
  selector: 'app-ai-prompter',
  templateUrl: './ai-prompter.component.html',
  styleUrls: ['./ai-prompter.component.css']
})
export class AiPrompterComponent implements OnInit {
  public prompt: string = '';
  public promptAnswer: any = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.prompt = 'Jaką wersją gpt jesteś?';
  }

  async onSendGPTPromptClick() {
    const gptResponse: any = await this.apiService.sendGPTPrompt(this.prompt);
    console.log('gptResponse:', gptResponse);
    this.promptAnswer = gptResponse.choices[0].message.content;
    console.log('promptAnswer:', this.promptAnswer);
  }
}
