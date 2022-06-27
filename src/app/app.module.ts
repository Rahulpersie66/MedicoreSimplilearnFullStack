import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './home/slider/slider.component';
import { SignInComponent } from './home/sign-in/sign-in.component';
import { HomeComponent } from './home/home/home.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { AllUserComponent } from './home/all-user/all-user.component';
import { ViewUpdateProductComponent } from './home/view-update-product/view-update-product.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ViewProductComponent } from './home/view-product/view-product.component';
import { UpdateProductComponent } from './home/update-product/update-product.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { ViewUserComponent } from './home/view-user/view-user.component';
import { FilterPipe } from './pipe/filter.pipe';
import { EmptyCartComponent } from './home/empty-cart/empty-cart.component';
import { CartViewComponent } from './home/cart-view/cart-view.component';
import { SortPipe } from './pipe/sort.pipe';
import { RegisterComponent } from './home/register/register.component';
import { TabletComponent } from './home/tablet/tablet.component';
import { InjectionComponent } from './home/injection/injection.component';
import { LiquidComponent } from './home/liquid/liquid.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { PayoutComponent } from './home/payout/payout.component';
import { OrderConfirmationComponent } from './home/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    SignInComponent,
    HomeComponent,
    AdminHomeComponent,
    AllUserComponent,
    ViewUpdateProductComponent,
    AddProductComponent,
    ViewProductComponent,
    UpdateProductComponent,
    ChangePasswordComponent,
    ViewUserComponent,
    FilterPipe,
    EmptyCartComponent,
    CartViewComponent,
    SortPipe,
    RegisterComponent,
    TabletComponent,
    InjectionComponent,
    LiquidComponent,
    CheckoutComponent,
    PayoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
