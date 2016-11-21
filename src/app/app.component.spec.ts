/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { DaftPunkComponent } from './app.component';

describe('DaftPunkComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DaftPunkComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(DaftPunkComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(DaftPunkComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(DaftPunkComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
