var arr = [
    {
        title: "Tiêu đề bài viết 1",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus ab atque odio repellendus iusto sunt labore? Repellendus odio sit et aliquam id minus. Nostrum fugiat enim distinctio. Dicta quaerat a minima error sapiente quod consequatur dignissimos inventore repellat, distinctio animi aspernatur labore eos assumenda. Saepe quasi dolore porro suscipit architecto, fuga quia inventore nobis temporibus harum accusamus cumque dolor blanditiis, in laboriosam necessitatibus reiciendis accusantium. Aperiam dolor hic facilis? ",
        image: "./image/img1.jpg",
    }, 
    {
        title: "Tiêu đề bài viết 2",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus ab atque odio repellendus iusto sunt labore? Repellendus odio sit et aliquam id minus. Nostrum fugiat enim distinctio. Dicta quaerat a minima error sapiente quod consequatur dignissimos inventore repellat, distinctio animi aspernatur labore eos assumenda. Saepe quasi dolore porro suscipit architecto, fuga quia inventore nobis temporibus harum accusamus cumque dolor blanditiis, in laboriosam necessitatibus reiciendis accusantium. Aperiam dolor hic facilis? ",
        image: "./image/img1.jpg",
    }, 
    
    {
        title: "Tiêu đề bài viết 3",
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis accusamus ab atque odio repellendus iusto sunt labore? Repellendus odio sit et aliquam id minus. Nostrum fugiat enim distinctio. Dicta quaerat a minima error sapiente quod consequatur dignissimos inventore repellat, distinctio animi aspernatur labore eos assumenda. Saepe quasi dolore porro suscipit architecto, fuga quia inventore nobis temporibus harum accusamus cumque dolor blanditiis, in laboriosam necessitatibus reiciendis accusantium. Aperiam dolor hic facilis? ",
        image: "./image/img1.jpg",
    }, 
]

var createArticle = function(article) {

    var item = document.createElement("div");
    item.classList.add("item");  
    var image = document.createElement("img");
    image.src = article.image;
    item.appendChild(image);
  
    var content = document.createElement("div");
    content.classList.add("content"); 
    var title = document.createElement("h2");
    title.textContent = article.title;
    content.appendChild(title);
  
    var text = document.createElement("p");
    text.textContent = article.content;
    content.appendChild(text);
    item.appendChild(content);
    return item;
  }
  
  // Hàm tạo giao diện với dữ liệu
var createInterface = function(arr) {
    var dataList = document.getElementById("list-item");
    arr.forEach(function (article) {
      var articleElement = createArticle(article);
      dataList.appendChild(articleElement);
    });
  }
  
  createInterface(arr);