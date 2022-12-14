import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'personas',
    loadChildren: () => import('./pages/personas/personas.module').then( m => m.PersonasPageModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./pages/rutas/rutas.module').then( m => m.RutasPageModule)
  },
  {
    path: 'frm-persona',
    loadChildren: () => import('./modals/frm-persona/frm-persona.module').then( m => m.FrmPersonaPageModule)
  },
  {
    path: 'localidades',
    loadChildren: () => import('./pages/localidades/localidades.module').then( m => m.LocalidadesPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'escuelas',
    loadChildren: () => import('./pages/escuelas/escuelas.module').then( m => m.EscuelasPageModule)
  },
  {
    path: 'frm-ruta',
    loadChildren: () => import('./modals/frm-ruta/frm-ruta.module').then( m => m.FrmRutaPageModule)
  },
  {
    path: 'frm-localidad',
    loadChildren: () => import('./modals/frm-localidad/frm-localidad.module').then( m => m.FrmLocalidadPageModule)
  },
  {
    path: 'frm-escuela',
    loadChildren: () => import('./modals/frm-escuela/frm-escuela.module').then( m => m.FrmEscuelaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
