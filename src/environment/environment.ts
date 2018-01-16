// Ionic Library Imports
import { Platform } from 'ionic-angular';

export const environment = {
    origin: 'http://192.168.43.29:8080/',
    deviceType: '',
    notCount: '0'
};

export class DeviceType {
    // To hold current device platform
    private currentPlatform: string;
    // All platform list
    private platformsList: Array<string> = ['android', 'ios', 'cordova', 'core', 'ipad', 'iphone', 'mobile', 'mobileweb', 'phablet', 'tablet', 'windows'];

    constructor(private platform: Platform) {
        this.platform.ready().then((source) => {
            console.log('platform source ' + source);
            for (const platformName of this.platformsList) {
                if (this.platform.is(platformName)) {
                    this.currentPlatform = platformName;
                    environment.deviceType = platformName;
                }
            }
        });
    }
}
