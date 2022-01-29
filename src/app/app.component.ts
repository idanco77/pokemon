import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import {HelpersService} from 'src/app/_services/generic/helpers.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isLoading = false;

  constructor(private router: Router, private helpers: HelpersService) {}

  ngOnInit() {
    this.helpers.pageSpinnerSubject.subscribe(showSpinner => this.isLoading = showSpinner);
  }
}

