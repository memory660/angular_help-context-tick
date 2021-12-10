import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContextHelpComponent } from './context-help/context-help.component';
import { ContextHelpCoalescingComponent } from './context-help-coalescing/context-help-coalescing.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextHelpComponent,
    ContextHelpCoalescingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
