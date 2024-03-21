import { Directive, EventEmitter, HostBinding, HostListener, Output } from "@angular/core"; 

@Directive({
    selector:'[appCustom]'
})

export class CustomDirective {
count:number = 0;
@Output() countEmitter:EventEmitter<number> = new EventEmitter();
colorsArray:Array<string> = ['red', 'green', 'yellow', 'purple']
interval:any;
@HostBinding('style.backgroundColor') bg:string  = 'red'
@HostListener('mousedown',['$event'])
    onClick(event:Event){
        this.interval = setInterval(() => {
this.count++
this.countEmitter.emit(this.count)
console.log(this.count)
        },100)
        let randomIndex = Math.floor(Math.random() * this.colorsArray.length);
        this.bg = this.colorsArray[randomIndex]
        
    }

    @HostListener('mouseup')
    onMouseUp(){
        clearInterval(this.interval)
    }
}