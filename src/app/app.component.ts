import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'lazyLoading';
    public arr = Array(30);
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

