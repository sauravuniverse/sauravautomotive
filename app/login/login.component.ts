
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { TouchGestureEventData } from "ui/gestures";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("item", { static: true }) angularItem: ElementRef;
    @ViewChild("btn", { static: true }) btnRef: ElementRef;
    @ViewChild("circle", { static: true }) circleRef: ElementRef;
    @ViewChild("logo", { static: true }) logoRef: ElementRef;
    item: View;
    btnItem: View;
    circleItem: View;
    logoItem: View;

    textFieldValue: string = "";
    isLogin = true;
    formSubmitted = false;
    navigating = false;
    loginTxt = "L o g i n";

  constructor(private _page: Page, private routerExtensions: RouterExtensions) { }

  ngOnInit(): void {

    this._page.on('navigatingTo', (data) => {
        this.circleItem.scaleX = 0;
        this.circleItem.scaleY = 0;
        this.navigating = false;
        this.logoItem.translateY = 0;
    })
    this._page.actionBarHidden = true;
    this.btnItem = this.btnRef.nativeElement;
    this.item = this.angularItem.nativeElement;
    this.circleItem = this.circleRef.nativeElement;
    this.logoItem = this.logoRef.nativeElement;

    this.item.scaleX = 0;
    this.item.scaleY = 0;
    this.circleItem.scaleX = 0;
    this.circleItem.scaleY = 0;
    this.btnItem.translateY = -50;
}
onButtonTap(): void {

  this.formSubmitted = true;
  setTimeout(() => {

      this.navigating = true;

      this.logoItem.animate({
          translate: { x: 0, y: 200 },
          duration: 400
      }).then(() => {
          this.circleItem.translateY = 200;
          this.circleItem.animate({
              scale: { x: 15, y: 15 },
              duration: 400,
              
          })
      });
      
  }, 2500);
  
}

onFocus(args: TouchGestureEventData) {

  if (args.action == "down") {
      this.btnItem.scaleX = 0.9;
      this.btnItem.scaleY = 0.9;
  } else if (args.action == "up") {
      this.btnItem.scaleX = 1;
      this.btnItem.scaleY = 1;
  }
  
}
setToLogin() {
  this.item.animate({
      scale: { x: 0, y: 0 },
      duration: 300
  }).then(() => {
      this.isLogin = true;
      this.loginTxt = "L o g i n";
      this.btnItem.animate({
          translate: { x: 0, y: -50 },
          duration: 200
      })
  });
}
showPassword
showHideIcon
showIcon
hideIcon
TextField




  

}
