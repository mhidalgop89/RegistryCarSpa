import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-view-cars',
  templateUrl: './view-cars.component.html',
  styleUrls: ['./view-cars.component.css']
})
export class ViewCarsComponent implements OnInit {
  //NgModule=this.NgModule;
  plateList : any = [];
  car : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
  mySaveFunc(){
    console.log("function called");
    alert('hello');
  }
  public fetchPosts(){
    this.http.get('http://localhost:8080/registry/all-cars').subscribe(posts => {
      console.log(posts)
      this.plateList = posts;
    });
  }

  onCreatePost(postData: {plate: string; color: string; model: string; chassis: string; proprietary: string}){
    //alert('onCreatePost');
    //console.log(postData);
    this.http.post(
      'http://localhost:8080/cars',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
      this.car = responseData;
      this.fetchPosts();

    });
    ;

  }

}
