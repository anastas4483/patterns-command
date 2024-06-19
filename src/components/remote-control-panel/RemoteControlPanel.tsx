import { Command } from '@/classes/command';
import { RemoteControl } from '@/classes/remote-control';
import { RemoteControlDevice } from '@/components/remote-control-device/RemoteControlDevice';
import { FC, useCallback, useMemo, useState } from 'react';
import styles from './remote-control-panel.module.css';

interface RemoteControlPanelProps {
    controls: RemoteControl[];
}

export const RemoteControlPanel: FC<RemoteControlPanelProps> = ({ controls }) => {

    const [activeFlag, setActiveFlag] = useState(false);

    const controlWrapper = useCallback((command: Command) => {
        return () => {
            setActiveFlag(true);
            setTimeout(() => setActiveFlag(false), 300);
            command.execute();
        };
    }, []);

    const remoteControlPanelClassName = useMemo(() =>
        `${styles.remoteControlPanel} ${activeFlag ? styles.active : ''}`
        , [activeFlag]);

    return (
        <div className={remoteControlPanelClassName}>
            {controls.map((control, index) => (
                <RemoteControlDevice
                    key={index}
                    deviceName={control.displayName}
                    controlOn={controlWrapper(control.on)}
                    controlOff={controlWrapper(control.off)}
                />
            ))}
        </div>
    );
};
