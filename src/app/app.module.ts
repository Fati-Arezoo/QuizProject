import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {​​ FormsModule }​​ from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

import { QuestionService } from './services/question.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuizComponent } from './quiz/quiz.component';
import { AboutAngularComponent } from './about-angular/about-angular.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, AboutComponent, ContactComponent, FooterComponent, QuizComponent, AboutAngularComponent, PostComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {}
