import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CommonTableComponent } from './shared/commontable/commontable.component';
import { MenuComponent } from './shared/menu/menu.component';
import { CommonFormComponent } from './shared/commonform/commonform.component';
import { CommondailogComponent } from './shared/commondailog/commondailog.component';
import { HomeComponent } from './container/pages/home/home.component';
import { DashboardComponent } from './container/pages/dashboard/dashboard.component';
import { ResourceComponent } from './container/pages/resources/resource/resource.component';
import { ImpactStoriesComponent } from './container/pages/impactStories/impact-stories/impact-stories.component';
import { ImpactViewsComponent } from './container/pages/impactStories/impact-views/impact-views.component';
import { ResourceViewsComponent } from './container/pages/resources/resource-views/resource-views.component';
import { AboutUsComponent } from './container/pages/about-us/about-us.component';
import { OurPartnersComponent } from './container/pages/our-partners/our-partners.component';
import { MaterialModuleComponent } from './materails/materail/materail.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule  } from '@ngrx/store';
import { rootReducer } from './reducers';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './shared/commontable/button/button.component';
import { SafeHtmlPipe } from './shared/pipe/safe-html.pipe';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';
import { ToggleButtonComponent } from './shared/commonComponents/toggle-button/toggle-button.component';
import { MatTabComponent } from './shared/commonComponents/mat-tab/mat-tab.component';
import { PieComponent } from './container/pages/chart/pie/pie.component';
import { GroupBarComponent } from './container/pages/chart/groupbar/groupbar.component';
import { DonotComponent } from './container/pages/chart/donot/donot.component';
import { LineComponent } from './container/pages/chart/line/line.component';
import { TimeLineComponent } from './container/pages/chart/time-line/time-line.component';
import { CardComponent } from './shared/commonComponents/card/card.component';
import { LoaderComponent } from './shared/commonComponents/loader/loader.component';
import { CommonFilterComponent } from './shared/commonComponents/common-filter/common-filter.component';
import { SpecialCharacterDirective } from './shared/directive/specail-character.directive';
import { SnackBarComponent } from './shared/commonComponents/snack-bar/snack-bar.component';
import { ForgetPasswordComponent } from './container/pages/forget-password/forget-password.component';
import { UserListComponent } from './container/admin/permission/user-list/user-list.component';
import { InterceptorInterceptor } from './container/admin/interceptor/interceptor.interceptor';

import { ResourceEffects } from './effects/resource.effects';
import { EffectsModule, USER_PROVIDED_EFFECTS } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { resourceSubCategoryReport } from './reducers/resource-view-reducer';
export function httpTranslateLoader(http: HttpClient):TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommonTableComponent,
    MenuComponent,
    CommonFormComponent,
    CommondailogComponent,
    HomeComponent,
    DashboardComponent,
    ResourceComponent,
    ImpactStoriesComponent,
    ImpactViewsComponent,
    ResourceViewsComponent,
    AboutUsComponent,
    OurPartnersComponent,
    ButtonComponent,
    SafeHtmlPipe,
    ToggleButtonComponent,
    MatTabComponent,
    PieComponent,
    GroupBarComponent,
    DonotComponent,
    LineComponent,
    TimeLineComponent,
    CardComponent,
    LoaderComponent,
    CommonFilterComponent,
    SpecialCharacterDirective,
    SnackBarComponent,
    ForgetPasswordComponent,
    UserListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleComponent,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    HttpClientModule,
    TranslateModule.forRoot({
      loader : {
        provide : TranslateLoader,
        useFactory : httpTranslateLoader,
        deps:[HttpClient]
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ResourceEffects])
  ],
  providers: [
    CookieService,
    {
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorInterceptor,
    multi : true
  },
  // ResourceEffects,
  // {
  //   provide : USER_PROVIDED_EFFECTS,
  //   multi:true,
  //   useValue:[ResourceEffects]
  // }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
