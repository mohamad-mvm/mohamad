import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, delay, timeout, catchError, take, skip, repeat, filter } from 'rxjs/operators';
import { of, interval } from 'rxjs';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  getCaptchaImage() {
    return this.http.post('https://www.sarbook.com/PublicUserSecurity/GetCaptcha', {}).pipe(
      tap(data => console.log(data)),
      map((data: any) => {
        return data.data as { Code: string; Data: string };
      }),
      delay(4000),
      tap(data => console.log(data)),
      timeout(5000),
      catchError(error => of({ Code: 'Request timed out', Data: undefined as string }))
    );
  }

  getSecond() {
    return interval(1000).pipe(
      map(x => {
        return Date.now();
      }),
      filter(x => x % 2 === 1)
    );
  }
}
