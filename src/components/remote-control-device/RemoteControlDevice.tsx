import { AppButton } from '@/components/common/app-button/AppButton';
import { FC, memo } from 'react';
import styles from './remote-control-device.module.css';

interface RemoteControlDeviceProps {
    deviceName: string;
    controlOn: () => void;
    controlOff: () => void;
}

const RemoteControlDeviceInner: FC<RemoteControlDeviceProps> = ({ deviceName, controlOff, controlOn }) => {
    return (
        <div className={styles.remoteControlDevice}>
            <span className={styles.deviceName}>{deviceName}</span>
            <AppButton label='ВКЛ' className={styles.controlOn} onClick={controlOn} />
            <AppButton label='ВЫКЛ' className={styles.controlOff} onClick={controlOff} />
        </div>
    );
};

export const RemoteControlDevice = memo(RemoteControlDeviceInner);