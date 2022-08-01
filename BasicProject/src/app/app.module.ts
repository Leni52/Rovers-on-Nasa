import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuriosityComponent } from './modules/rovers/curiosity/curiosity.component';
import { OpportunityComponent } from './modules/rovers/opportunity/opportunity.component';
import { SpiritComponent } from './modules/rovers/spirit/spirit.component';
import { HomeComponent } from './modules/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { FooterComponent } from './modules/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CuriosityComponent,
    OpportunityComponent,
    SpiritComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTableModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
