import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "/app/app.component.tpl.html"
})
export class AppComponent {
    operation: string = 'x';
    fstvalue: number = 0;
    scdvalue: number = 0;
    result: number = 0;
    listOperation: Array<{ firstvalue: number, scdvalue: number, operation: string }>;

    constructor() {
        this.result = this.multiplication(this.fstvalue,this.scdvalue);
    }

    process(operation: string, firstvalue: number, scdvalue: number): void {

    }

    addition(firstvalue: number, scdvalue: number): number {
        let result:number;
        return result;
    }

    multiplication(firstvalue: number, scdvalue: number): number {
        let result:number;
        return result;
    }

    substration(firstvalue: number, scdvalue: number): number {
        let result:number;
        return result;
    }
}
