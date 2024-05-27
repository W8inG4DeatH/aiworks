import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api/api.service';

@Component({
    selector: 'app-ai-prompting-frontend',
    templateUrl: './ai-prompting-frontend.component.html',
    styleUrls: ['./ai-prompting-frontend.component.scss'],
})
export class AiPromptingFrontendComponent implements OnInit {
    public prompt: string = '';
    public promptAnswer: any = '';

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.prompt = 'Opowiedz krótki kawał po polsku.';
    }

    async OnSendPromptClick() {
        const gptResponse: any = await this.apiService.sendGPTPrompt(this.prompt);
        this.promptAnswer = gptResponse.choices[0].message.content;
        console.log('this.promptAnswer:', this.promptAnswer, gptResponse);
    }
}
