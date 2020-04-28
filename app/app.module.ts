import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeRoutingModule } from "./home/home-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { MapComponent } from './map/map.component';
import { HttpClientModule } from "@angular/common/http"
@NgModule({
   bootstrap: [
      AppComponent
   ],
   imports: [
      AppRoutingModule,
      NativeScriptModule,
      NativeScriptUISideDrawerModule,
      HomeRoutingModule,
      NativeScriptFormsModule,
      NativeScriptCommonModule,
      HttpClientModule
     
    ],
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      VehicledetailsComponent,
      UpdatepasswordComponent,
      MapComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class AppModule { }
