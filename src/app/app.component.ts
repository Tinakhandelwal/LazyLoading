import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lazyLoading';
  public arr = Array(50);
  public arr1 = Array(50);
   ngOnInit(){

      window.addEventListener('scroll', this.scroll, true); //third parameter
  }
  
  scroll = (): void => {
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };
 }

