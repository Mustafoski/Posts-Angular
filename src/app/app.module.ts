import { Routes, RouterModule } from '@angular/router';
import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'post-list', component: PostListComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'post-add', component: PostEditComponent },
  { path: '', redirectTo: 'post-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListComponent,
    PostComponent,
    PostEditComponent,
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
