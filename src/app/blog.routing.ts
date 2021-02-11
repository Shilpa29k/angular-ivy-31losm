import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login.component";
import { BlogListComponent } from "./blog-list.component";
const blogRoutes: Routes = [
  {
    path: "", 
    component: LoginComponent
  },
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "list",
    component: BlogListComponent
  }
];
export const BlogRouting = RouterModule.forRoot(blogRoutes, {
  useHash: false
});
