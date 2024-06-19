import { Command } from "@/classes/command";
import { DoorDevice } from "@/classes/devices/door-device/DoorDevice";

export class DoorDeviceOffCommand extends Command {
    protected doorDevice: DoorDevice;

    constructor(doorDevice: DoorDevice) {
        super();
        this.doorDevice = doorDevice;
    }

    execute() {
        this.doorDevice.close();
    }
}