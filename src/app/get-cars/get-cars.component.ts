import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-get-cars',
  templateUrl: './get-cars.component.html',
  styleUrls: ['./get-cars.component.css']
})
export class GetCarsComponent implements OnInit {
today: Date = new Date();
plate: any;
car : any;
currentDay: Date = new Date();
//datePipe: DatePipe | undefined

  constructor(private http: HttpClient, private datePipe: DatePipe) { 
    //this.today = new Date();
  }

  ngOnInit(): void {
  }

  public fetchPosts(){
    this.http.get('http://localhost:8080/registry/all-cars').subscribe(posts => {
      console.log(posts)
    });
  }
  public getInfo(){

    let currentDate = new Date();
    if (this.today.getTime() < currentDate.getTime()) {
        console.log("Fecha invalida");
    }

    console.log(this.datePipe.transform(this.today,"yyyy-MM-dd HH:mm:ss"));
    let selectedDate = this.datePipe.transform(this.today,"yyyy-MM-dd HH:mm:ss");
    this.http.get('http://localhost:8080/registry/info/'+this.plate+'?date='+selectedDate).subscribe(posts => {
      console.log(posts)
      this.car=posts;
      console.log("plate:"+this.plate)
      console.log("today:"+this.today)
      //document.getElementById("myDialog").showModal(); 
      //this.myDialog = document.querySelector('#myDialog');
      //this.myDialog.showModal();
      //const element = document.getElementById("myDialog");
      //element.open = true;
      let myDialog:any = <any>document.getElementById("myDialog");
      myDialog.showModal();
    });
  }

}
