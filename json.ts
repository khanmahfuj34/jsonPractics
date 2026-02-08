 const loadData = () => {
     const url = 'https://jsonplaceholder.typicode.com/posts';
     fetch(url)
         .then(res => res.json())
         .then((data) => {
             displayPosts(data);
         });
 };
 const displayPosts = (posts: any[]) => {
     const postContainer = document.getElementById('post-container');
     if (!postContainer) return;
     postContainer.innerHTML = '';
     posts.forEach(post => {
         const li = document.createElement('li');
         li.innerText = post.title;
         postContainer.appendChild(li);
     })
 }