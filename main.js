// promises
function createPostP(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else {
                reject('Error! Something went wrong!');
            }
        }, 2000);
    });
}

createPostP({title: 'Post four', post: 'This is post four'})
    .then(getPosts)
    .catch(err => console.log(err));


// callbacks
const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.getElementById("paragraph").innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        //callback();
    }, 2000);
}

getPosts();

createPost({title: 'Post three', body: 'This is post three'},/* getPosts*/);


// Promise.all
const promise1 = Promise.resolve('Hello promises!');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye!'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));

// Async / Await
async function init(){
    await createPost({title: 'Post five', body: 'This is post five'});

    getPosts();
}

init();

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();