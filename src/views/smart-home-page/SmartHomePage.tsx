import { DoorDeviceOffCommand } from '@/classes/devices/door-device/commands/DoorDeviceOffCommand';
import { DoorDeviceOnCommand } from '@/classes/devices/door-device/commands/DoorDeviceOnCommand';
import { DoorDevice } from '@/classes/devices/door-device/DoorDevice';
import { FanDeviceOffCommand } from '@/classes/devices/fan-device/commands/FanDeviceOffCommand';
import { FanDeviceOnCommand } from '@/classes/devices/fan-device/commands/FanDeviceOnCommand';
import { FanDevice } from '@/classes/devices/fan-device/FanDevice';
import { LightDeviceOffCommand } from '@/classes/devices/light-device/commands/LightDeviceOffCommand';
import { LightDeviceOnCommand } from '@/classes/devices/light-device/commands/LightDeviceOnCommand';
import { LightDevice } from '@/classes/devices/light-device/LightDevice';
import { TvDeviceOffCommand } from '@/classes/devices/tv-device/commands/TvDeviceOffCommand';
import { TvDeviceOnCommand } from '@/classes/devices/tv-device/commands/TvDeviceOnCommand';
import { TvDevice } from '@/classes/devices/tv-device/TvDevice';
import { RemoteControl } from '@/classes/remote-control';
import { RemoteControlPanel } from '@/components/remote-control-panel/RemoteControlPanel';
import { useEffect, useState } from 'react';
import styles from './smart-home-page.module.css';

export const SmartHomePage = () => {
    const [controls, setControls] = useState<RemoteControl[]>([]);

    useEffect(() => {

        // home-devices
        const kitchenLight = new LightDevice('kitchenLight');
        const bedRoomFan = new FanDevice('bedRoomFan');
        const bedRoomLight = new LightDevice('bedRoomLight');
        const bedRoomTv = new TvDevice('bedRoomTv');
        const garageDoor = new DoorDevice('garageDoor');

        // on-commands
        const kitchenLightOnCommand = new LightDeviceOnCommand(kitchenLight);
        const bedRoomFanOnCommand = new FanDeviceOnCommand(bedRoomFan);
        const bedRoomLightOnCommand = new LightDeviceOnCommand(bedRoomLight);
        const bedRoomTvOnCommand = new TvDeviceOnCommand(bedRoomTv);
        const garageDoorOnCommand = new DoorDeviceOnCommand(garageDoor);

        // off-commands
        const kitchenLightOffCommand = new LightDeviceOffCommand(kitchenLight);
        const bedRoomFanOffCommand = new FanDeviceOffCommand(bedRoomFan);
        const bedRoomLightOffCommand = new LightDeviceOffCommand(bedRoomLight);
        const bedRoomTvOffCommand = new TvDeviceOffCommand(bedRoomTv);
        const garageDoorOffCommand = new DoorDeviceOffCommand(garageDoor);

        setControls([
            { displayName: kitchenLight.name, on: kitchenLightOnCommand, off: kitchenLightOffCommand },
            { displayName: bedRoomFan.name, on: bedRoomFanOnCommand, off: bedRoomFanOffCommand },
            { displayName: bedRoomLight.name, on: bedRoomLightOnCommand, off: bedRoomLightOffCommand },
            { displayName: bedRoomTv.name, on: bedRoomTvOnCommand, off: bedRoomTvOffCommand },
            { displayName: garageDoor.name, on: garageDoorOnCommand, off: garageDoorOffCommand }
        ]);
    }, []);

    return (
        <div className={styles.smartHomePage}>
            <RemoteControlPanel controls={controls} />
        </div>
    );
};

