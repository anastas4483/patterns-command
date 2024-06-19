import { Command } from "@/classes/command";

export interface RemoteControl {
    on: Command;
    off: Command;
    displayName: string;
}
