import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  
  @Input() timeLimit: any;
  countDownTimer: any;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown()
  }

  startCountdown() {
    this.countDownTimer = this.timeLimit;
    let counter = 0;
    const interval = setInterval(() => {
      this.countDownTimer--;
      counter++;
      if (counter == this.timeLimit) {
        clearInterval(interval);
        this.countDownTimer = null;
      }
    }, 1000);
  }

}
