import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'comix-editor',
    templateUrl: './comix-editor.component.html',
    styleUrls: ['./comix-editor.component.scss']
})

export class ComixEditorComponent implements OnInit {

    public htmlContent: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    OnFormat()
    {
        console.log('OnFormat()');
    }

}
