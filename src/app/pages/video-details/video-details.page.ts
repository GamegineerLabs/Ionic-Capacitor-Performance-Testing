import {Component, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Hls from "hls.js";
import { VideoService } from "../../services/video.service";
import {Video} from "../../interface/video.interface";


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.page.html',
  styleUrls: ['./video-details.page.scss'],
})
export class VideoDetailsPage implements OnInit {
  video = <Video>{ };

  constructor(private router: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit() {
    this.video = this.videoService.getVideoDetails(this.router.snapshot.params['id']);
    if (Hls.isSupported()) {
      var video = document.getElementById('video');
      var hls = new Hls();
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log('video and hls.js are now bound together !');
      });
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(
          'manifest loaded, found ' + data.levels.length + ' quality level'
        );
      });
      //hls.loadSource('https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8');
      console.log(this.video.url);
      hls.loadSource(this.video.url);
      // bind them together
      hls.attachMedia(<HTMLMediaElement>video);
    }
  }


}
