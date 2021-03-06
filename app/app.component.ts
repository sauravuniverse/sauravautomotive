import { Component, OnInit, ViewChild } from "@angular/core";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject services.
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }
    clickvehicledetails()
    {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer()
    }

   onlogout()
    {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer()
    }
    onupdatepassword()
    {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer()
    }
    onMapReady()
    {
        
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer()
    }

    
}
