import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.page.html',
  styleUrls: ['./userslist.page.scss'],
})
export class UserslistPage implements OnInit {


  pokemons: any[] = []

  results: any[] | undefined;

  constructor(
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/').subscribe(res => { console.log(res); this.results = res.results; this.pokemons = res.results })
  }

  public getIdFromUrl(url: string): number {
    const parts = url.split('/');
    return parseInt(parts[parts.length - 2]);
  }

  public handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.pokemons.filter((pokemon) => pokemon.name.toLowerCase().indexOf(query) > -1);

  }

}
