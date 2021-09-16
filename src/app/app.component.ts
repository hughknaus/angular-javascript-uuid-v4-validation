import { Component, VERSION } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public gen_uuid(uuidMax: any): void {
    var errorsFound = 0;

    for (var i = 0; i < parseInt(uuidMax); i++) {
      const guid = uuidv4();
      console.log('guid = ', guid);

      const uuidVersion = guid.toString().substring(14, 15);
      const isVersion4 = uuidVersion === '4';

      if (!isVersion4) {
        errorsFound += 1;
      }

      console.log('i = ', i, '; errorsFound = ', errorsFound);
    }

    console.log(
      'items = ',
      i,
      '; errorsFound = ',
      errorsFound,
      errorsFound === 0 ? ' ALL v4 UUIDs' : ''
    );
  }
}
