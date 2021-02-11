import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login.component";
import { BlogListComponent } from './blog-list.component';
import{BlogRouting} from "./blog.routing";
import { BlogService } from './blog.service';

@NgModule({
  imports: [BrowserModule, FormsModule,
        ReactiveFormsModule,BlogRouting],
  declarations: [AppComponent, LoginComponent, BlogListComponent],
  bootstrap: [AppComponent],
  providers: [BlogService]
})
export class AppModule {}
