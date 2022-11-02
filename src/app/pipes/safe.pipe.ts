import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(public domSanitizer : DomSanitizer){}

  transform(url : string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
