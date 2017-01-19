import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RedditAppComponent } from './component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ RedditAppComponent ],
  bootstrap: [ RedditAppComponent ]
})

export class RedditAppModule {}
