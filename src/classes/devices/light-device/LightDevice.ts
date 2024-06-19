import { Device } from "@/classes/Device";

export class LightDevice implements Device {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    switchOn() {
        console.log('light is on');
    }

    switchOff() {
        console.log('light is off');
    }

}