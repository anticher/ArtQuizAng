import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';
import { EngineService } from 'src/app/services/engine.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
  
  constructor(
    private engineService: EngineService,
    private audioService: AudioService,
    ) { }

  public ngOnInit(): void {
    this.engineService.setDefaultsLocal('firstLoad')
  }

  // public playMusic(): void {
  //   this.audioService.playMainMusic()
  // }
}
