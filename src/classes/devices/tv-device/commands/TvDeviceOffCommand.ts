import { Command } from "@/classes/command";
import { TvDevice } from "@/classes/devices/tv-device/TvDevice";

export class TvDeviceOffCommand extends Command {
    protected tvDevice: TvDevice;

    constructor(tvDevice: TvDevice) {
        super();
        this.tvDevice = tvDevice;
    }

    execute() {
        this.tvDevice.off();
    }
}