import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyArk3xLwHWwifm-0EicRbCkDHEQHJlcEQc'
    })
  ],
  exports: [
    MapComponent,
  ],
  providers: [
    MapService
  ]
})
export class MapModule { }
