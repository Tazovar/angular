import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
data:any

  constructor(private activatedRoute:ActivatedRoute,private proxy:ProxyService){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      let id = param['id'];
      this.proxy.getOne(id).subscribe({
        next:(result) => {
this.data = result
console.log(result);
        },
      error:(err) =>  {
       console.error(err) 
      },
      complete:() => {
        console.log('completed');        
      },
      })
    })

  }



}
