 const LoadData = () => {
     const url = 'https://jsonplaceholder.typicode.com/posts';
     fetch(url)
         .then(res => res.json())
         .then((data) => {
             displaypost(data);
         });
 };
 const displaypost = posts => {
     const postContainer = document.getElementById('post-container');
     postContainer.innerHTML = '';
     posts.forEach(post => {
         const li = document.createElement('li');
         li.innerText = post.title;
         postContainer.appendChild(li);
     })
 }