import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RedditAppComponent } from './component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDbService } from '../reddit/mock.serive';

@NgModule({
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDbService)
  ],
  declarations: [ RedditAppComponent ],
  bootstrap: [ RedditAppComponent ]
})

export class RedditAppModule {}
