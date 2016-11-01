import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "/app/app.component.tpl.html"
})
export class AppComponent {
    operation: number = 0;
    fstvalue: number = 0;
    scdvalue: number = 0;
    result: number = 0;
    listOperation: Array<{ firstvalue: number, scdvalue: number, operation: string }>;
    listOperator: Array<{ value: number, text: string }>;

    constructor() {
        this.result = this.multiplication(this.fstvalue, this.scdvalue);
        this.listOperator = [
            {
                value: 1,
                text: 'Multiplication'
            },
                        {
                value: 2,
                text: 'Addition'
            },
                        {
                value: 3,
                text: 'Substraction'
            }
        ]
    }

    processOperation(): void {
        console.log(this.operation);
        console.log(this.fstvalue);
    }

    addition(firstvalue: number, scdvalue: number): number {
        let result: number;
        return result;
    }

    multiplication(firstvalue: number, scdvalue: number): number {
        let result: number;
        return result;
    }

    substration(firstvalue: number, scdvalue: number): number {
        let result: number;
        return result;
    }

    setFirstValue(value:number): void{
        this.fstvalue = value;
    }

    setSecondValue(value: number):void{
        this.scdvalue = value;
    }

    setOperation(value: number):void{
        this.operation = value;
    }
}
