import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './Components/dogs/dogs.component';
import { CatsComponent } from './Components/cats/cats.component';
import { CustomComponent } from './Components/custom/custom.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './Components/base/base.component';
import { HttpClientModule } from '@angular/common/http';

export enum Routes{
  base='',
  cats='cats',
  dogs='dogs',
  custom='custom'
};

const routes=[
  {path:Routes.cats,component:CatsComponent},
  {path:Routes.dogs,component:DogsComponent},
  {path:Routes.custom,component:CustomComponent},
  {path:Routes.base,component:BaseComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    CatsComponent,
    CustomComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Router,
    RouterModule.forRoot(routes),
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
