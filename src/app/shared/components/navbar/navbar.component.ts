import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin = false

  constructor(
    private router:Router
  ){ }

  ngOnInit(): void {
    this.isLogin = localStorage.getItem('sesion') ? true : false;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
    this.ngOnInit();
  }

}
