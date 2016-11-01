import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "/app/app.component.tpl.html"
})
export class AppComponent {
    operation:string;
    firstvalue:number = 0;
    scdvalue:number = 0;
    result:number = 0;
    listOperation: Array<{firstvalue:number,scdvalue:number,operation:string}>;

    process(operation:string, firstvalue:number, scdvalue:number):void{

    }

    addition():void{

    }

    multiplication(): void{

    }

    substration(): void{

    }
 }
