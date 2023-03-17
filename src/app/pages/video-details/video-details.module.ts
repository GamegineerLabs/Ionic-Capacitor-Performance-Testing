import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoDetailsPageRoutingModule } from './video-details-routing.module';

import { VideoDetailsPage } from './video-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoDetailsPageRoutingModule
  ],
  declarations: [VideoDetailsPage]
})
export class VideoDetailsPageModule {}
