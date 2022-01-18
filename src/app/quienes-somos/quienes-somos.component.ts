import { Component, inject, OnInit } from '@angular/core';
import countries from '../mock_json_ciudad.json';
import { ApiService } from "./json_service";

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;


  url = "/url/path/to/your/server";

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api
      .getListOfGroup(this.url)
      .subscribe(
        (        data: any) => {
          console.log(data);
        },
        (        err: any) => {
          console.log(err);
        }
      );
  }

}
