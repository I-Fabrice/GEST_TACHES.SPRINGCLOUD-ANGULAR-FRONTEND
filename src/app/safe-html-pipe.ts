/*

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }

  transform(value) {
    console.log(this.sanitized.bypassSecurityTrustHtml(value));
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}*/


import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'safeHtml'
})

export class SafeHtmlPipe implements PipeTransform {

  constructor(protected sanitizer: DomSanitizer) {}

 public transform(value: any): any {
     const sanitizedContent = DOMPurify.sanitize(value);
     console.log(sanitizedContent)
     return this.sanitizer.bypassSecurityTrustHtml(sanitizedContent);

  }
}
