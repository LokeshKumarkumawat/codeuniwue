import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SaveVideoDetailsComponent } from './save-video-details/save-video-details.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { DemoCodeComponent } from './demo-code/demo-code.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { AuthInterceptor ,AuthModule, OidcSecurityService  } from 'angular-auth-oidc-client';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { FeaturedComponent } from './featured/featured.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LikedVideosComponent } from './liked-videos/liked-videos.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { VideoCardComponent } from './video-card/video-card.component';

import { CallbackComponent } from './callback/callback.component';
import { CommentsComponent } from './comments/comments.component';
import { SliderCardComponent } from './slider-card/slider-card.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { MyWatchedComponent } from './my-watched/my-watched.component';
import { TrendingComponent } from './trending/trending.component';
import { MyVideosComponent } from './my-videos/my-videos.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    SaveVideoDetailsComponent,
    SidebarComponent,
    UploadVideoComponent,
    VideoPlayerComponent,
    DemoCodeComponent,
    VideoDetailComponent,
    FeaturedComponent,
    HistoryComponent,
    HomeComponent,
    LikedVideosComponent,
    SubscriptionsComponent,
    VideoCardComponent,
    CommentsComponent,
    CallbackComponent,
    SliderCardComponent,
    CourseCategoryComponent,
    MyWatchedComponent,
    TrendingComponent,
    MyVideosComponent
  ],
  imports: [

    // AuthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AuthConfigModule,

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
