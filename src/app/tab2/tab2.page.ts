import { Component } from '@angular/core';
import { TabsService } from '../tabs/tabs.service';
import { NativeAudio } from '@capacitor-community/native-audio';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista: any;
  volume: number = 0.2;
  idAnt: string = "";
  constructor(
    public tabsService: TabsService
  ) { }

  ngOnInit(): void {
    this.lista = this.tabsService.getLista();
    console.log(this.lista);
  }

  play(id: string, url: string) {

    if(this.idAnt !== "") this.stop(this.idAnt);

    NativeAudio.preload({
      assetId: id,
      assetPath: url,
      audioChannelNum: 1,
      isUrl: true
    });
    NativeAudio.play({
      assetId: id,
      time: 0
    });

    this.idAnt = id;
  }

  stop(id: any) {
    NativeAudio.stop({
      assetId: id
    });
  }

  up(id: string) {
    if (this.volume >= 0.9) {
      alert('Volume Máximo.');
    } else {
      this.volume = this.volume + 0.1;
      NativeAudio.setVolume({
        assetId: id,
        volume: this.volume,
      });
    }

  }

  down(id: string) {
    if (this.volume <= 0.1) {
      alert('Volume Máximo.');
    } else {
      this.volume = this.volume - 0.1;
      NativeAudio.setVolume({
        assetId: id,
        volume: this.volume,
      });
    }
  }

}
