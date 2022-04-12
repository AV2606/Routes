import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  source='';
  error=false;

  constructor(private httpClient:HttpClient) {
    this.getImage();
   }

  ngOnInit(): void {
  }
  getImage(){
    this.source='';
    this.httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe(
      /*next*/(value:any)=>{
        this.source=value.message;
      },
      /*error */(value:any)=>{
        this.error=true;
      },
      /*complete*/()=>{}
    );
  }
  refresh(){
    this.getImage();
  }

}
