import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
// @ViewChild(TestComponent) testComponent!:TestComponent


ngOnInit(): void {}


ngAfterViewInit(): void {}
}
