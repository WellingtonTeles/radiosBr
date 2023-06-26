import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  constructor() { }

  getLista(){
    const lista = [
      { style: "Pop Music",
        radios: [
          {id: 0, name: "Top 100 Station", url: "http://87.230.103.58:80/top100station.mp3"},
          {id: 1, name: "Antenne Bayern", url: "http://mp3channels.webradio.antenne.de:80/antenne"},
          {id: 2, name: "Hitradio OE3", url: "http://194.232.200.156:8000/;?icy=http"},
          {id: 3, name: "PopRadio", url: "http://streaming208.radionomy.com:80/-PopRadio"},
          {id: 4, name: "Fenomen", url: "http://cdn-icast.radyofenomen.com/fenomen/fenomenweb/mpeg/256/home"},
          {id: 5, name: "Number One FM", url: "http://31.210.157.109/rto/numberonefm/icecast.audio"}
        ]
      },
      {
        style: "Electronic",
        radios: [
          {id: 6, name: "SomaFM - Groove Salad", url: "http://ice1.somafm.com/groovesalad-128-mp3"},
          {id: 7, name: "SomaFM - Space Station", url: "http://ice1.somafm.com/spacestation-128-mp3"}
        ]
      },
      {
        style: "Classical Music",
        radios: [
          {id: 8, name: "Public Domain Radio", url: "http://stream2137.init7.net:80/;"}
        ]
      }

    ]
    return lista
  }
}
