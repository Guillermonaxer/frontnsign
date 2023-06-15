import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/Forum/register.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule

  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
