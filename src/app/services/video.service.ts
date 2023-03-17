import { Injectable } from '@angular/core';
import {Video} from "../interface/video.interface";

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private videos:Video[] = [
    {id: 0, speaker: "Ionic Team", title: "Ionic Show: March 2023", description: "Get the latest product and open source updates from our core team members. ", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/Ionic+Show_+March+2023.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/Ionic+Show_+March+2023.jpg"},
    {id: 1, speaker: "Vivek Mano", title: "Consolidation from 8 Apps Down to 1", description: "Building and maintaining multiple applications is a dizzying reality for many enterprise organizations. This is done intentionally, as these multiple apps are built to serve external customers and internal employees for a variety of reasons. While many enterprises have chalked up juggling this many apps under one roof as a cost of doing business, others have sought out an alternative.\n" +
        "\n" +
        "In this talk, Vivek Mano, product specialist at Ionic, will walk through a real customer’s experience of keeping up with eight different applications and merging them into one performant app. He will discuss how the decision was made, what moving parts needed to synchronize to make this change happen, and how deploying mini apps became the foundation for this solution.", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/How+a+Storage+Company+Consolidated+from+8+Apps+Down+to+1+_+Micro+Frontends+Summit+2023.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/How+a+Storage+Company+Consolidated+from+8+Apps+Down+to+1+_+Micro+Frontends+Summit+2023.jpg"},
    {id: 2, speaker: "Mike Hartington", title: "Ionic in 30 Series: Ionic Angular", description: "Whether you're just starting out with Ionic or are already a seasoned pro, you won’t want to miss this exciting series. \n" +
        "\n" +
        "Ionic’s Mike Hartington, Director of Developer Relations, will cover everything from our open-source developer tools to our enterprise offerings in just 30 minutes.\n" +
        "\n" +
        "What you’ll walk away with:\n" +
        "\n" +
        "+Ionic's open-source UI toolkit gives your app the best mobile look and feel, from gestures to animations\n" +
        "+Using a single codebase, you can build cross-platform applications for iOS, Android, and mobile-optimized PWAs\n" +
        "+How to safeguard user and their data by integrating biometrics and single sign-on\n" +
        "+Easily build and deploy your app with a mobile CI/CD cloud platform\n" +
        "\n" +
        "Plus, get a live demo with hands-on tips for building your first app in Ionic Angular.\n", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/Ionic+in+30+Series_+Ionic+Angular.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/Ionic+in+30+Series_+Ionic+Angular.jpg"},
    {id: 3, speaker: "Cecelia Martinez", title: "Managing Updates to Mobile Micro Frontends", description: "Once you’ve implemented a micro frontend strategy for your mobile applications, it’s important to consider how you’ll update them. There are organizational, infrastructure, and process factors to consider when developing your strategy for managing updates. \n" +
        "\n" +
        "In this session, Cecelia Martinez, developer advocate for Appflow at Ionic, will review how to ensure a consistent strategy across teams, manage resources, and establish a uniform process for deploying updates. She will also discuss some of the limitations and pitfalls of updating manually and how this process can be made more efficient.\n", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/Managing+Updates+to+Mobile+Micro+Frontends+_+Micro+Frontends+Summit+2023.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/Managing+Updates+to+Mobile+Micro+Frontends+_+Micro+Frontends+Summit+2023.jpg"},
    {id: 4, speaker: "Matt Netkow & Josh Thomas", title: "Micro Frontends for Mobile with Ionic Portals", description: "App development is rapidly evolving. Applications were originally built using a monolithic approach—a single-tiered code base combining UI and data into a single platform. Now, companies are moving towards micro frontends, an architectural style where UI frontends are composed of independent components that can be built by different teams at different times, saving development time and costs.\n" +
        "\n" +
        "Micro frontends need to be reusable and portable. They need to be able to communicate with other parts of the app, provide a seamless and virtually invisible to users, and be easy to update without updating the larger app. Given these points, web technology is a great way to deliver micro experiences not only for the web but for mobile as well.\n" +
        "\n" +
        "Matt Netkow, head of product marketing at Ionic, walks us through how using Ionic Portals enables your engineering teams to deliver micro experiences on mobile apps.\n", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/Micro+Frontends+for+Mobile+with+Ionic+Portals.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/Micro+Frontends+for+Mobile+with+Ionic+Portals.jpg"},
    {id: 5, speaker: "Max Lynch", title: "The Future of Enterprise App Development", description: "The trends in enterprise app development are constantly evolving. Ionic works closely with enterprise app development teams from around the world to shape the way we think about app development. \n" +
        "\n" +
        "Learn how Ionic layers enterprise offerings on top of an open source foundation. Max Lynch, CEO and co-founder at Ionic, dives into the latest Ionic product and solutions, and share his vision for the future of app development.", url: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/The+Future+of+Enterprise+App+Development.m3u8", image: "https://hlsdemooutput.s3.us-west-2.amazonaws.com/images/The+Future+of+Enterprise+App+Development.jpg"},
  ];

  constructor() { }

  getVideos() {
    return this.videos;
  }

  getVideoDetails(id: number) {
    return this.videos[id];
  }
}
