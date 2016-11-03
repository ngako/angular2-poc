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
    strOperation: string = '';
    listOperation: Array<{ firstvalue: number, scdvalue: number, operation: string }>;
    listOperator: Array<{ value: number, text: string }>;

    constructor() {
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
        switch (this.operation) {
            case 1:
                this.strOperation = "+";
                this.addition();
                break;
            case 2:
                this.strOperation = "x";
                this.multiplication();
                break;
            case 3:
                this.strOperation = "-";
                this.substration();
                break;

            default:
                break;
        }
        console.log(this.result);
    }

    addition(): void {
        console.log("addition");
        this.result = this.fstvalue + this.scdvalue;
    }

    multiplication(): void {
        console.log("multiplication");
        this.result = this.fstvalue * this.scdvalue;
    }

    substration(): void {
        console.log("substraction");
        this.result = this.fstvalue - this.scdvalue;
    }
}
