import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';
import {EmulatorImpl} from './app/emulator/emulator';

(window as any).emulator = new EmulatorImpl();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
