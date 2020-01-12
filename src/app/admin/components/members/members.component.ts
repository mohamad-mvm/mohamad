import { AuthService } from './../../../auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    console.log('auth-code', this.authService.code);
  }
}
