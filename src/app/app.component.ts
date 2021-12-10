import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angular-component-help-context';

  constructor(private ngZone: NgZone) {
    this.ngZone.onMicrotaskEmpty.subscribe(() => {
      console.log('onMicrotaskEmpty - tick');
    });
  }
}
