export abstract class Command {

    constructor() {
        this.execute = this.execute.bind(this);
    }

    abstract execute(): void;
}