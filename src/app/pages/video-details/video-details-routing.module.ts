import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoDetailsPage } from './video-details.page';

const routes: Routes = [
  {
    path: '',
    component: VideoDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoDetailsPageRoutingModule {}
