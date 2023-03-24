import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data: any;
  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state;
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    console.log(': ===> this.data', this.data);
  }
}
