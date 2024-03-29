import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserServiceComponent } from './services/user-service/user-service.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { NewPostPopUpComponent } from './components/new-post-pop-up/new-post-pop-up.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { ExplorePageComponent } from './components/explore-page/explore-page.component';
import { BookmarkComponent } from './components/bookmark/bookmark.component';
import { EditProfilePopUpComponent } from './components/edit-profile-pop-up/edit-profile-pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
    UserProfileComponent,
    NewPostPopUpComponent,
    PostComponent,
    EditProfilePopUpComponent,
    ExplorePageComponent,
    BookmarkComponent,
    PostDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
  ],
  bootstrap: [AppComponent],
  providers: [UserServiceComponent],
})
export class AppModule {}
