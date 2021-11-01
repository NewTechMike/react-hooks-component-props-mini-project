import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList(){
  console.log("blogData: ", blogData)
  console.log("blogData Posts: ", blogData.posts)
  const art = blogData.posts.map((comps) => {
    return <main>
      <Article key={comps.id} 
        title = {comps.title} 
        date = {comps.date}
        preview = {comps.preview}
        />
    </main>
  })
  return <main>
  {art}
  </main>
}

export default ArticleList;