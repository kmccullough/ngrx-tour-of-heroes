import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'powers',
    loadChildren: 'app/powers/powers.module#PowersModule',
  },
  {
    path: 'heroes',
    loadChildren: 'app/heroes/heroes.module#HeroesModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
