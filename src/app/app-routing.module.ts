import { ListProductComponent } from './modules/list-product/list-product.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DilutioncalculatorComponent } from './modules/dilution-calculator/dilutioncalculator.component';
import { CustcalculatorComponent } from './modules/cust-calculator/custcalculator.component';

const routes: Routes = [
  { path : 'header',
    component: HeaderComponent,
    pathMatch: 'full'
  },

  {
    path: 'list-product',
    component: ListProductComponent,
  },
  {
     path: 'dilution-calculator',
     component: DilutioncalculatorComponent,
  },
  {
    path: 'cust-calculator',
    component: CustcalculatorComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
