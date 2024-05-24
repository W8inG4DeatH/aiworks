import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor() {}

    async sendGPTPrompt(prompt: string) {
        const gpt4: boolean = true;
        const openAIAPIKey: string = './api.keys';
        const bearerKey: string = 'Bearer ' + openAIAPIKey;

        if (gpt4) {
            const url = 'https://api.openai.com/v1/chat/completions';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: bearerKey,
                },
                body: JSON.stringify({
                    model: 'gpt-4-turbo-preview',
                    messages: [
                        {
                            role: 'user',
                            content: prompt,
                        },
                    ],
                    max_tokens: 4000,
                    temperature: 0.2,
                }),
            });
            const data = await response.json();
            return data;
        } else {
            const url = 'https://api.openai.com/v1/completions';
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: bearerKey,
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'user',
                            content: prompt,
                        },
                    ],
                    max_tokens: 4000,
                    temperature: 0.2,
                }),
            });
            const data = await response.json();
            return data;
        }
    }
}
