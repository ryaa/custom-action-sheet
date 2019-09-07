import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'unlocker',
    templateUrl: 'unlocker.html'
})
export class UnlockerComponent {

    private setIntID;
    @Input()
    set unlock(flag: boolean) {
        let theRange = Number(this.input.nativeElement.value);
        if (theRange === 100) {
            if (flag === false) {
                this.setIntID = setInterval(() => {
                    if (this.input.nativeElement.value > 0) {
                        this.input.nativeElement.value = theRange--;
                    } else {
                        this.input.nativeElement.value = 0;
                        this.unlockedChanged.emit(false);
                        clearInterval(this.setIntID);
                    }
                }, 1);
            } else {
                // this is already unlocked; nothing to do
            }
        } else {
            if (flag === true) {
                this.setIntID = setInterval(() => {
                    if (this.input.nativeElement.value < 100) {
                        this.input.nativeElement.value = theRange++;
                    } else {
                        this.input.nativeElement.value = 100;
                        this.unlockedChanged.emit(true);
                        clearInterval(this.setIntID);
                    }
                }, 1);
            } else {
                // this is already locked; nothing to do
            }
        }
    }
    get unlock(): boolean {
        const theRange = Number(this.input.nativeElement.value);
        return theRange === 100;
    }

    @Output() unlockedChanged: EventEmitter<boolean> = new EventEmitter();
    @ViewChild('unlock') input: any;

    constructor() {
    }

    public checkUnlock(evt: Event) {
        let theRange = Number(this.input.nativeElement.value);
        if (evt.type == 'touchend' || evt.type == 'mouseout') { // added mouseout to support in stackblitz
            if (theRange === 100) {
                this.unlockAction();
            } else {
                this.setIntID = setInterval(() => {
                    if (this.input.nativeElement.value > 0) {
                        this.input.nativeElement.value = theRange--;
                    } else {
                        this.input.nativeElement.value = 0;
                        this.unlockedChanged.emit(false);
                        clearInterval(this.setIntID);
                    }
                }, 1);
            }
        } else {
            this.setIntID = setInterval(() => {
                if (this.input.nativeElement.value > 0) {
                    this.input.nativeElement.value = theRange--;
                } else {
                    this.input.nativeElement.value = 0;
                    this.unlockedChanged.emit(false);
                    clearInterval(this.setIntID);
                }
            }, 1);
        }
    }

    unlockAction() {
        this.unlockedChanged.emit(true);
    }
}