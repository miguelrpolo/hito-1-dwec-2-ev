import { Component, inject, OnInit } from '@angular/core';
import { Champion } from '../champion';
import { ConectorJsonService } from '../conector-json.service';
import countries from '../mock_json_ciudad.json';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
  title = 'json-file-read-angular';
  public countryList:{name:string, code:string}[] = countries;

  public lista_personajes:Champion[] = [];

  constructor(public api:ConectorJsonService) {}

  ngOnInit() {
    this.api.getJSON("http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json").subscribe((datos: any) => {


      for (let campeon of Object.keys(datos.data)) {
        var campeon_info = datos.data[campeon];
        let champion:Champion = {
          name : campeon_info.id,
          title: campeon_info.title,
          id: campeon_info.key
      };
        this.lista_personajes.push(champion);
    }




    });

    console.log(this.lista_personajes)
    console.log(this.countryList)
  }

}
