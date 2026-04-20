// Promise.all
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('foo'), 100));
// const promise3 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

// Promise.all([promise1, promise2, promise3])
//   .then((values) => {
//     console.log(values); // [3, 'foo', {data}]
//   })
//   .catch((error) => {
//     console.error('At least one promise failed:', error);
//   });
//   Use case: When you need all results before proceeding (e.g., loading multiple resources).

// 2. Promise.allSettled()
// Waits for all promises to settle (resolve or reject), returns results regardless of outcome.
// const promises = [
//   Promise.resolve(42),
//   Promise.reject(new Error('Failed')),
//   Promise.resolve('success')
// ];

// Promise.allSettled(promises)
//   .then((results) => {
//     console.log(results);
    /* Output:
    [
      { status: 'fulfilled', value: 42 },
      { status: 'rejected', reason: Error },
      { status: 'fulfilled', value: 'success' }
    ]
    */
//   });
//   Use case: When you want results from all promises, even if some fail (e.g., health checks, batch requests).

// 3. Promise.race()
// Returns the result of the first promise to settle (resolve or reject).

// const promise1 = new Promise((resolve) => 
//   setTimeout(() => resolve('One'), 100)
// );
// const promise2 = new Promise((resolve) => 
//   setTimeout(() => resolve('Two'), 100)
// );

// Promise.race([promise1, promise2])
//   .then((value) => {
//     console.log(value); // 'Two' (faster)
//   });

// Use case: Implement timeouts, get the fastest response from multiple sources.

// 4. Promise.any()
// Returns the first promise that resolves. Rejects only if all promises reject.
// const promise1 = Promise.reject('Error 1');
// const promise2 = Promise.reject('Error 2');
// const promise3 = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

// Promise.any([promise1, promise2, promise3])
//   .then((value) => {
//     console.log(value); // 'Success'
//   })
//   .catch((error) => {
//     console.error('All promises rejected:', error);
//   });

// Use case: Try multiple services and use the first successful response (e.g., redundant API endpoints).

// Passing Headers with Tokens While Fetching Multiple APIs

// 1. Multiple APIs in Parallel (Promise.all)

// const token = localStorage.getItem('authToken');

// const headers = {
//   'Authorization': `Bearer ${token}`,
//   'Content-Type': 'application/json'
// };

// Fetch multiple APIs simultaneously
// Promise.all([
//   fetch('/api/users/1', { headers }),
//   fetch('/api/posts/1', { headers }),
//   fetch('/api/comments/1', { headers })
// ])
//   .then(responses => Promise.all(responses.map(res => res.json())))
//   .then(([user, posts, comments]) => {
//     console.log({ user, posts, comments });
//   })
//   .catch(error => console.error('Error:', error));

//2. Helper function to reduce repetition
// const apiCall = (url, options = {}) => {
//   const token = localStorage.getItem('authToken');
  
//   const defaultHeaders = {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
//   };

//   return fetch(url, {
//     ...options,
//     headers: {
//       ...defaultHeaders,
//       ...options.headers // Allow overriding headers
//     }
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP Error: ${response.status}`);
//       }
//       return response.json();
//     });
// };

// Usage
// Promise.all([
//   apiCall('/api/users/1'),
//   apiCall('/api/posts/1'),
//   apiCall('/api/comments/1')
// ])
//   .then(([user, posts, comments]) => {
//     console.log({ user, posts, comments });
//   })
//   .catch(error => console.error('Error:', error));

// Using Axios for cleaner syntax and automatic JSON parsing
// Install: npm install axios

// import axios from 'axios';

// const token = localStorage.getItem('authToken');

// // Create instance with default headers
// const api = axios.create({
//   baseURL: 'https://api.example.com',
//   headers: {
//     'Authorization': `Bearer ${token}`,
//     'Content-Type': 'application/json'
//   }
// });

// // Fetch multiple APIs
// async function fetchData() {
//   try {
//     const [userRes, postsRes, commentsRes] = await Promise.all([
//       api.get('/users/1'),
//       api.get('/posts/1'),
//       api.get('/comments/1')
//     ]);

//     console.log({
//       user: userRes.data,
//       posts: postsRes.data,
//       comments: commentsRes.data
//     });
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// fetchData();

// // Update token dynamically
// export function updateToken(newToken) {
//   api.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
// }

//common headers passing with fetch and axios while fetching multiple APIs in parallel using Promise.all, Promise.allSettled, Promise

// const token = "your_token_here";

// const config = {
//   headers: {
//     Authorization: `Bearer ${token}`
//   }
// };

// Promise.all([
//   axios.get("/api/users", config),
//   axios.get("/api/products", config),
//   axios.get("/api/orders", config)
// ])
// .then(([users, products, orders]) => {
//   console.log(users.data, products.data, orders.data);
// })
// .catch(err => console.error(err));