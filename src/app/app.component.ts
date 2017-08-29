import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  loadedFeature = 'recipe';

  title = 'Angular Project1';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
