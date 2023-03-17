import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideosPageRoutingModule } from './videos-routing.module';

import { VideosPage } from './videos.page';
import {VgCoreModule} from "@videogular/ngx-videogular/core";
import {VgStreamingModule} from "@videogular/ngx-videogular/streaming";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideosPageRoutingModule,
    VgCoreModule,
    VgStreamingModule
  ],
  declarations: [VideosPage]
})
export class VideosPageModule {}
