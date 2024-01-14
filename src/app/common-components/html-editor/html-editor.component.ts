import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-html-editor',
  templateUrl: './html-editor.component.html',
  styleUrls: ['./html-editor.component.css']
})

export class HtmlEditorComponent implements OnInit {

  htmlContent: string = '<p><b>Your HTML</b> content here</p>';
  safeHtmlContent: SafeHtml | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeHtmlContent = this.getSafeHtml(this.htmlContent);
  }

  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  onHtmlContentChange(): void {
    this.safeHtmlContent = this.getSafeHtml(this.htmlContent);
  }
}
