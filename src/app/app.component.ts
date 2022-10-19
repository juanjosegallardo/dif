import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Padrón', url: '/personas', icon: 'person' },
    { title: 'Rutas', url: '/rutas', icon: 'walk' },
    { title: 'Localidades', url: '/localidades', icon: 'map' },
    { title: 'Escuelas', url: '/escuelas', icon: 'school' },
    { title: 'Reportes', url: '/reportes', icon: 'document' },


  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
