import { Component, HostListener } from '@angular/core';


const LYRICS: Array<String> = [
  'work it', 'make it', 'do it', 'makes us',
  'harder', 'better', 'faster', 'stronger',
  'more than', 'hour', 'our', 'never',
  'ever', 'after', 'work is', 'over'
];
const KEYS = [
  'Q', 'W', 'E', 'R',
  'A', 'S', 'D', 'F',
  'Y', 'U', 'I', 'O',
  'H', 'J', 'K', 'L'
];

/**
 * <punk-board> Component
 * 
 */
@Component({
  selector: 'punk-board',
  templateUrl: './punkBoard.component.html',
  styleUrls: ['./punkBoard.component.css']
})
export class PunkBoardComponent {
  private lyrics: Array<String> = LYRICS;
  private keys: Array<String> = KEYS;

  private lowPitch: boolean = true;
  private playedVerse: string;

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    ev.stopPropagation();
    switch (ev.which) {
      case 81: // Q (WORK IT) 
        this.playVerse(0);
        break;
      case 87: // W (MAKE IT)
        this.playVerse(1);
        break;
      case 69: // E (DO IT)
        this.playVerse(2);
        break;
      case 82: // R (MAKES US)
        this.playVerse(3);
        break;

      case 65: // A (HARDER) 
        this.playVerse(4);
        break;
      case 83: // S (BETTER) 
        this.playVerse(5);
        break;
      case 68: // D (FASTER) 
        this.playVerse(6);
        break;
      case 70: // F (STRONGER) 
        this.playVerse(7);
        break;

      case 89: // Y (MORE THAN) 
        this.playVerse(8);
        break;
      case 85: // U (HOUR) 
        this.playVerse(9);
        break;
      case 73: // I (OUR) 
        this.playVerse(10);
        break;
      case 79: // O (NEVER) 
        this.playVerse(11);
        break;

      case 72: // H (EVER) 
        this.playVerse(12);
        break;
      case 74: // J (AFTER) 
        this.playVerse(13);
        break;
      case 75: // K (WORK IS) 
        this.playVerse(14);
        break;
      case 76: // L (OVER) 
        this.playVerse(15);
        break;

      case 16: // SHIFT
        this.lowPitch = !this.lowPitch;
        break;
    }
  }

  /**
   * Play verse given it's index in the LYRICS array
   */
  playVerse(verseIndex) {
    let pitch = this.lowPitch ? 'low' : 'high';
    let url = `./samples/${pitch}/${verseIndex + 1}.wav`;
    let audio = new Audio(url);
    audio.play();

    this.playedVerse = verseIndex;
    setTimeout(() => this.playedVerse = null, 100);
  }
}
