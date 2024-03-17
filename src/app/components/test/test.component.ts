import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";


@Component({
    selector:"app-test",
    templateUrl:'./test.component.html',
    styleUrls:['./test.component.css']
})

export class TestComponent implements OnInit,AfterViewInit{
// @ViewChild('btn') btn!:ElementRef

public str:string = "public"
public str2:string  ="public"


ngOnInit(): void {    
}


ngAfterViewInit(): void {
//  this.btn.nativeElement.style.backgroundColor = 'red'  
}


hello():void{
    alert("Hello!");
}
}