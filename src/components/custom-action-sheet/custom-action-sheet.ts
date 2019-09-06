import { ViewController, NavParams } from 'ionic-angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

import { UnlockerComponent } from '../unlocker/unlocker';

@Component({
  selector: 'custom-action-sheet',
  templateUrl: 'custom-action-sheet.html',
  animations: [
    trigger('shakeit', [
      state('shakestart', style({
        transform: 'scale(1)',
      })),
      state('shakeend', style({
        transform: 'scale(1)',
      })),
      transition('shakestart => shakeend', animate('1000ms ease-in', keyframes([
        style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.1 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.2 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.3 }),
        style({ transform: 'translate3d(4px, 0, 0)', offset: 0.4 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.5 }),
        style({ transform: 'translate3d(4px, 0, 0)', offset: 0.6 }),
        style({ transform: 'translate3d(-4px, 0, 0)', offset: 0.7 }),
        style({ transform: 'translate3d(2px, 0, 0)', offset: 0.8 }),
        style({ transform: 'translate3d(-1px, 0, 0)', offset: 0.9 }),
      ]))),
    ])]
})
export class CustomActionSheetComponent implements OnInit {

  public confirm = false;
  public shakeState;

  @ViewChild(UnlockerComponent)
  private unlockerComponent: UnlockerComponent;

  constructor(
    public viewCtrl: ViewController
  ) {
  }

  public ngOnInit() {
  }

  public unlockedChangedHandler(unlocked: boolean): void {
    if (this.unlockerComponent.unlock === true && this.confirm === false) {
      this.shakeState = 'shakestart';
      this.unlockerComponent.unlock = false;
    }
  }

  public shakeStart(event) {
  }
  public shakeEnd(event) {
    this.shakeState = 'shakeend';
  }

  public closeModal() {
    this.viewCtrl.dismiss(null);
  }

}