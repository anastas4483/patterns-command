import { Device } from "@/classes/Device";

export class FanDevice implements Device {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    on() {
        console.log('fan is on');
    }

    off() {
        console.log('fan is off');
    }

}