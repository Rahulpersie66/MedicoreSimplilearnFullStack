import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './home/add-product/add-product.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AllUserComponent } from './home/all-user/all-user.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { EmptyCartComponent } from './home/empty-cart/empty-cart.component';
import { HomeComponent } from './home/home/home.component';
import { InjectionComponent } from './home/injection/injection.component';
import { LiquidComponent } from './home/liquid/liquid.component';
import { OrderConfirmationComponent } from './home/order-confirmation/order-confirmation.component';
import { PayoutComponent } from './home/payout/payout.component';
import { RegisterComponent } from './home/register/register.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { SliderComponent } from './home/slider/slider.component';
import { TabletComponent } from './home/tablet/tablet.component';
import { UpdateProductComponent } from './home/update-product/update-product.component';
import { ViewProductComponent } from './home/view-product/view-product.component';
import { ViewUpdateProductComponent } from './home/view-update-product/view-update-product.component';
import { ViewUserComponent } from './home/view-user/view-user.component';

const routes: Routes = [
  {path:'',redirectTo:"/signIn",pathMatch:'full'},
  {path:"slider",component:SliderComponent},
  {path:"signIn",component:SignInComponent},
  {path:"home",component:HomeComponent},
  {path:"adminHome",component:AdminHomeComponent},
  {path:"allUser",component:AllUserComponent},
  {path:"adminViewUpdateProduct",component:ViewUpdateProductComponent},
  {path:"addProduct",component:AddProductComponent},
  {path:"viewProduct/:productId",component:ViewProductComponent},
  {path:"updateProduct/:productId",component:UpdateProductComponent},
  {path:"changePassword/:userId",component:ChangePasswordComponent},
  {path:"viewUser/:userId",component:ViewUserComponent},
  {path:"register",component:RegisterComponent},
  {path:"empty",component:EmptyCartComponent},
  {path:"tablet",component:TabletComponent},
  {path:"injection",component:InjectionComponent},
  {path:"liquid",component:LiquidComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"payout/:orderId",component:PayoutComponent},
  {path:"orderConfirmation",component:OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
