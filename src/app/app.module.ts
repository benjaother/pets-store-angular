import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PetListComponent } from './public/pet/pet-list/pet-list.component';
import { PetDetailComponent } from './public/pet/pet-detail/pet-detail.component';
import { CreatePetComponent } from './admin/pet/create-pet/create-pet.component';
import { UpdatePetComponent } from './admin/pet/update-pet/update-pet.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PetListComponent,
    PetDetailComponent,
    CreatePetComponent,
    UpdatePetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
