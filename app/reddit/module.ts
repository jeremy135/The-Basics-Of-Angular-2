import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RedditAppComponent } from './component';
import { RedditService } from './reddit.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule, JsonpModule } from '@angular/http';

import { InMemoryService } from '../reddit/mock.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryService)
  ],
  providers: [ RedditService ],
  declarations: [ RedditAppComponent ],
  bootstrap: [ RedditAppComponent ]
})

export class RedditAppModule {}
