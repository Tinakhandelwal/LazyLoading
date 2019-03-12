<<<<<<< HEAD
import { Component, OnInit, HostListener } from '@angular/core';
=======
import { Component, OnInit, HostListener} from '@angular/core';
>>>>>>> f92bc22cd81fa9ec22bd5d8be29d59d7562327c6

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'secondProject';
  public arr = Array(30);
=======
export class AppComponent implements OnInit{
  title = 'lazyLoading';
    public arr = Array(30);
>>>>>>> f92bc22cd81fa9ec22bd5d8be29d59d7562327c6
  count :number= 1;
  flag: boolean=false;

  @HostListener("window:scroll", ['$event'])
  onScroll(): void{
    if((window.innerHeight + window.scrollY)>= document.body.offsetHeight){
      this.flag = true;
      setTimeout(()=>{
        this.flag = false;
        this.arr = [...this.arr, this.count++];
        
      },1000);
      
    }
  }
}

