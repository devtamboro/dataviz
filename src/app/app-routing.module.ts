import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './layouts/basic/basic.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    children: [
      {
        path: 'push',
        loadChildren: () => import('src/app/pages/push/push.module').then(m => m.PushModule) 
      },
      {
        path: 'nps',
        loadChildren: () => import('src/app/pages/nps/nps.module').then(m => m.NpsModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('src/app/pages/courses/courses.module').then(m => m.CoursesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
