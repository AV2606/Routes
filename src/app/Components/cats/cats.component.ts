import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  info='';
  error: boolean=false;

  constructor(httpClient:HttpClient) { 
    httpClient.get('https://cat-fact.herokuapp.com/facts').subscribe(
     /*next*/ (value:any)=>{
       for (const iterator of value) {
         this.info+=iterator.text+'\n';
         
       }
       
     },
      /*error*/(value:any)=>{
        this.info='An error occured! :(';
        this.error=true;
      },
      ()=>{
        //this.info='completed'
      }
     );
  }

  ngOnInit(): void {
  }

}
