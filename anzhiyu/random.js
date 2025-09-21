var posts=["/post/1.html","/post/hello-world.html","/post/2.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };