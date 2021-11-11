export class ToDo {
    Id: number;
    Name: string;
    Note: string;
    DueDate: Date;
    Sub: SubClass;

    constructor() {
        this.Sub = new SubClass();
    }
}

export class SubClass {
    variable: string;
}