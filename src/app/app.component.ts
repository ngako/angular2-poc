import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: "/app/app.component.tpl.html"
})
export class AppComponent {
    operation: string = '';
    fstvalue: number = 1;
    scdvalue: number = 0;
    result: number = 0;
    listOperation: Array<{ firstvalue: number, scdvalue: number, operation: string }>;
    listOperator: Array<{ value: string, text: string }>;

    constructor() {
        this.result = this.multiplication(this.fstvalue, this.scdvalue);
        this.listOperator = [
            {
                value: 'x',
                text: 'Multiplication'
            },
                        {
                value: '+',
                text: 'Addition'
            },
                        {
                value: '-',
                text: 'Substraction'
            }
        ]
    }

    processOperation(operation: string, firstvalue: number, scdvalue: number): void {
        console.log(operation);
        console.log(firstvalue);
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
}
