import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { CheckOutComponent } from './core/check-out/check-out.component';
import { HomeComponent } from './core/home/home.component';
import { MyOrdersComponent } from './core/my-orders/my-orders.component';
import { OrderSuccessComponent } from './core/order-success/order-success.component';
import { ProductsComponent } from './core/products/products.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';

const routes: Routes = [
  // public access
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent },
  // private access
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
  // private && admin's access
  { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard] },
  { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard] },
  // instead of Error page - 404 Page Not Found
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
