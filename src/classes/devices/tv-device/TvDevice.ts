import { Device } from "@/classes/Device";

export class TvDevice implements Device {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    on() {
        console.log('tv is turned on');
    }

    off() {
        console.log('tv is turned off');
    }

}