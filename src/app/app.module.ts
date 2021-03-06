import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { AdminComponent } from "./admin/admin.component";
import { LibrarianComponent } from "./librarian/librarian.component";
import { BorrowerComponent } from "./borrower/borrower.component";
import { AuthorComponent } from "./admin/author/author.component";
import { LmsService } from "./common/lms.service";
import { PagerService } from "./common/pager.service";
import { AuthsortPipe } from "./common/pipes/authsort.pipe";
import { LmsDirectDirective } from "./common/directive/lms-direct.directive";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    LibrarianComponent,
    BorrowerComponent,
    AuthorComponent,
    AuthsortPipe,
    LmsDirectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [LmsService, PagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
