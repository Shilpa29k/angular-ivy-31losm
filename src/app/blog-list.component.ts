import { Component, OnInit } from "@angular/core";
import { BlogsDetails } from "./blog-details.model";
declare const require: any;
@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.css"]
})
export class BlogListComponent implements OnInit {
  blogs: BlogsDetails[];
  blog: any = new BlogsDetails();
  isEnable: boolean = false;
  isEdit: boolean = false;
  constructor() {
    this.blog.name = "";
    this.blog.Description = "";
  }

  ngOnInit() {
    this.blogs = require("./blogs.json");
    this.sortAsc();
  }

sortAsc(){
  return this.blogs.sort((a, b) => {
      return <any>new Date(a.date) - <any>new Date(b.date);
    });
}
sortDesc() {
    return this.blogs.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

addNewBlog()
{
 this.blog.name = "";
this.blog.Description = "";
 this.isEnable = true;
}
  addBlog() {
    this.blog.date = new Date();
    this.blog.Id=this.blogs.length+1;
    this.blogs.push({Id:this.blog.Id,name:this.blog.name,Description:this.blog.Description,date:this.blog.date});
    this.isEnable = false;
  }
  editBlog(data: any) {
    this.isEnable = true;
    this.isEdit=true;
    this.blog.name = data.name;
    this.blog.Description = data.Description;
    this.blog.Id=data.Id;
  }
  updateBlog()
  {
    let index = this.blogs.findIndex(item => item.Id == this.blog.Id);
    this.blogs[index] = {Id:this.blog.Id,name:this.blog.name,Description:this.blog.Description,date:this.blog.date};
    this.isEdit=false;
    this.isEnable=false;
  }
  deleteBlog(data: any) {
    if (data != null) {
      this.blogs = this.blogs.filter(item => item.Id != data.Id);
    }
  }
}
