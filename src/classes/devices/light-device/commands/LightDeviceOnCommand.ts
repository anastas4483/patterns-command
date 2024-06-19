import { Command } from "@/classes/command";
import { LightDevice } from "@/classes/devices/light-device/LightDevice";

export class LightDeviceOnCommand extends Command {
    protected lightDevice: LightDevice;

    constructor(lightDevice: LightDevice) {
        super();
        this.lightDevice = lightDevice;
    }

    execute() {
        this.lightDevice.switchOn();
    }
}