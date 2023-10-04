import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { SaveVideoDetailsComponent } from './save-video-details/save-video-details.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { FeaturedComponent } from './featured/featured.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryComponent } from './history/history.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { TrendingComponent } from './trending/trending.component';
import { MyWatchedComponent } from './my-watched/my-watched.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'featured', component: FeaturedComponent,
      },
      {
        path: 'my-videos', component: MyVideosComponent,
      },
      {
        path: 'my-subscriptions', component: SubscriptionsComponent,
      },
      {
        path: 'history', component: HistoryComponent,
      },
      {
        path: 'trending', component: TrendingComponent,
      },
      {
        path: 'my-liked', component: LikedVideosComponent,
      },
      {
        path: 'my-watched', component: MyWatchedComponent,
      },
    ]
  },


  { path: 'upload-video', component: UploadVideoComponent },
  {
    path: 'save-video-details/:videoId', component: SaveVideoDetailsComponent,
  },
  {
    path: 'video', component: VideoPlayerComponent,
  },
  {
    path: 'video-details/:videoId', component: VideoDetailComponent,
  }  ,
  {
    path: 'callback', component: CallbackComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
