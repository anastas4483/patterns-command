import { Command } from "@/classes/command";
import { FanDevice } from "@/classes/devices/fan-device/FanDevice";

export class FanDeviceOffCommand extends Command {
    protected fanDevice: FanDevice;

    constructor(fanDevice: FanDevice) {
        super();
        this.fanDevice = fanDevice;
    }

    execute() {
        this.fanDevice.off();
    }
}