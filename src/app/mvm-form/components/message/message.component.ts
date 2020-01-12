import { HttpService } from '@MvmForm/services';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  public captcha: string | { Code: string; Data: string };

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getCaptchaImage().subscribe(data => {
      this.captcha = data;
    });

    this.httpService.getSecond().subscribe(x => {
      console.log(x);
    });
  }
}
