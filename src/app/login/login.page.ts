import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Animation,AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    usuario:"",
    password:""
  }
  @ViewChild('logo',{static: false}) logo: ElementRef;
  @ViewChild('content',{static: false}) content: ElementRef;
  @ViewChild('header',{static: false}) header: ElementRef;
  constructor(private router: Router, private animationCtrl:AnimationController) {}

  ngOnInit() {
  }

  ngAfterViewInit(){
    const logoAnimation: Animation = this.animationCtrl.create()
    .addElement(this.logo.nativeElement)
    .duration(1500)
    .fromTo('opacity','0','1');
    logoAnimation.play();

    const loginAnimation: Animation = this.animationCtrl.create()
    .addElement(this.content.nativeElement)
    .duration(1500)
    .fromTo('transform','translateY(40px)','translatY(0px)')
    .fromTo('opacity','0','1');
    loginAnimation.play();

    const headerAnimation: Animation = this.animationCtrl.create()
    .addElement(this.header.nativeElement)
    .duration(100)
    .fromTo('opacity','0','1');
    headerAnimation.play();


  }

  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/inicio'],navigationExtras);
  }

}