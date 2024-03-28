import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
activatedUserEmailAddres:string = ''

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      let email = param['email']

      if(email){
this.activatedUserEmailAddres = email
      }
    })
  }
  constructor(private authservice:AuthService,private router:Router,private activatedRoute:ActivatedRoute) {
    
  }
  onLogOutBtnClick():void{
this.authservice.onLogOutButtonClick();
this.router.navigate(['/auth/login'])
  }
}
