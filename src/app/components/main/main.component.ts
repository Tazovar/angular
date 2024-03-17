import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit,OnInit {

  @ViewChild(TestComponent) test!:TestComponent
  
  
  ngAfterViewInit(): void {
    // this.test.hello()
    // this.test.hello();
    this.test.hello();
  }


  btnClick(){
    this.test.hello()
  }
  ngOnInit(): void {
// undefined.hello();
  }
  cardsArray:Array<Card> = [
    {
      image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b9b91d8c-70b9-4461-8107-e656b41f1633/air-max-90-gore-tex-mens-shoes-cZwz8t.png",
      name: 'nike air max',
      description: 'This is nike prouct',
      price: 200,
      isSale: true,
      salePrice: 110
    },
    {
      image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4c413473-5aca-4850-9999-83bcaac522c3/air-max-sc-mens-shoes-LR42xg.png",
      name: 'nike air max',
      description: 'This is nike prouct',
      price: 200,
      isSale: true,
      salePrice: 110
    },
    {
      image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ae178e75-38aa-4212-ba98-3f2d45b7ac13/air-max-90-mens-shoes-Bd2qnn.png",
      name: 'nike air max',
      description: 'This is nike prouct',
      price: 300,
      isSale: true,
      salePrice: 200
    },
  ]
}
