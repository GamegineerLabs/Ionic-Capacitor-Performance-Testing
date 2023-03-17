import { Component, OnInit } from '@angular/core';
import { VideoService } from "../../services/video.service";
import {Video} from "../../interface/video.interface";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  videos: Array<Video> = [];

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videos = this.videoService.getVideos();
  }

}
