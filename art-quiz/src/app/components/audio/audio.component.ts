import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss']
})
export class AudioComponent implements OnInit {
  public isScreenVisible: boolean = true;

  constructor(private audioService: AudioService,) { }

  ngOnInit(): void {
  }

  public playMusic(): void {
    this.isScreenVisible = false
    this.audioService.playMainMusic()
  }
}
