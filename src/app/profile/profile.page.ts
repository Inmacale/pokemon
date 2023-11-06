import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  url: string = "https://pokeapi.co/api/v2/pokemon/";
  pokemon: any;

  constructor(private activatedRoute: ActivatedRoute, private htpp: HttpClient) { }

  ngOnInit() {
    this.cargaDetallePokemon();
  }

  private cargaDetallePokemon() {

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if (id !== null) {
      this.url = this.url + id;
    }

    this.htpp.get<any>(this.url).subscribe(res => { console.log(res); this.pokemon = res; })
  }


}


