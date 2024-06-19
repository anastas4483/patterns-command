import { Device } from "@/classes/Device";

export class DoorDevice implements Device {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    open() {
        console.log('door is open');
    }

    close() {
        console.log('door is closed');
    }

}