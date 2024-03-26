import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
data$!:Observable<any>


constructor(private testservice:TestService){}

ngOnInit(): void {
 this.data$ = this.testservice.getAllPosts()
}
}
