import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';

import { MapService } from './map.service';
import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyArk3xLwHWwifm-0EicRbCkDHEQHJlcEQc'
    }),
    NgPipesModule
  ],
  exports: [
    MapComponent,
  ],
  providers: [
    MapService
  ]
})
export class MapModule { }
