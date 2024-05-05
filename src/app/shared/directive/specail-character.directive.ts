import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from 'src/app/service/http.service';

@Directive({
  selector: '[appSpecialCharacter]'
})
export class SpecialCharacterDirective {
 private regexStr:string = '^[a-zA-Z_]+$' 
  constructor(private snackBar: MatSnackBar,private httpService:HttpService,private el: ElementRef) { }
  @HostListener('keypress',['$event']) onKeyPress(event:any){
    let isValidString : boolean = RegExp(this.regexStr).test(event.key);
    if(!isValidString){
      event.preventDefault()
     this.openSnackBar('Special Character & Number is not allowed !','')
    }
  }
  @HostListener('paste',['$event']) onPaste(event:any){
    this.validate(event)
  }
  validate(event:any){
    this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
    this.openSnackBar('Special Character & Number is not allowed !','')
    event.preventDefault()
  }
openSnackBar(message: string, action: string) {
   this.httpService.updateSnackBarData({message})
    this.snackBar.open(message,action);
  }
}
