import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer){}

  transform(value: string, ...args: unknown[]): SafeHtml {
    let safeHtml:any = this.sanitized.sanitize(0,value)
    if(args[0] === -1){
      return safeHtml
    }
    return safeHtml.substr(0,args[0]) + "...";
  }

}
