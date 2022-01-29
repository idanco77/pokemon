import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/gallery', pathMatch: 'full'},
  {path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)},
  { path: 'editor', loadChildren: () => import('./editor/editor.module').then(m => m.EditorModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
