import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import{HomeComponent } from "./home/home.component"
import{LoginComponent} from "./login/login.component"
import{VehicledetailsComponent} from "./vehicledetails/vehicledetails.component"
import { from } from "rxjs";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "vehicledetails", component: VehicledetailsComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
