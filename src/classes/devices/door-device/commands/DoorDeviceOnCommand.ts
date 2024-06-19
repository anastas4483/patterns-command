import { Command } from "@/classes/command";
import { DoorDevice } from "@/classes/devices/door-device/DoorDevice";

export class DoorDeviceOnCommand extends Command {
    doorDevice: DoorDevice;

    constructor(doorDevice: DoorDevice) {
        super();
        this.doorDevice = doorDevice;
    }

    execute() {
        this.doorDevice.open();
    }
}