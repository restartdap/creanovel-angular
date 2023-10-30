import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { NovelasCreatorModuleLayoutComponent } from 'src/app/layouts/novelas-creator-module-layout/novelas-creator-module-layout.component';
import { NovelaCreatePageComponent } from './novela-create-page/novela-create-page.component';
import { NovelaCreatorPageComponent } from './novela-creator-page/novela-creator-page.component';
import { NovelasCreatorPageComponent } from './novelas-creator-page/novelas-creator-page.component';

const routes: Routes = [
  {
    path: '',
    component: NovelasCreatorPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: NovelaCreatorPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'create',
    component: NovelaCreatePageComponent,
    // canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelasCreatorRoutingModule {}
