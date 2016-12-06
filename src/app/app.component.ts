import { Component, HostListener } from '@angular/core';

const audio = new Audio('../samples/song-instrumental.mp3');
const PLAY = 'PLAY';
const STOP = 'STOP';


@Component({
  selector: 'daft-punk',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DaftPunkComponent {
  title: string = 'WORK IT, MAKE IT, DO IT';
  subtitle: string = 'harder. better. faster. stronger.';
  action: string = PLAY;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    ev.stopPropagation();
    if (ev.which === 32) { // SPACE
      this.play();
    }
  }

  /**
   * Play/pause instrumental song
   */
  play() {
    if (audio.paused) {
      this.action = STOP;
      audio.play();
    } else {
      this.action = PLAY;
      audio.pause();
      audio.currentTime = 0;
    }
  }
}
