# Just-tech-news

Just-tech-news project provides a robust back end for a website that contains technology news. This website is very similar to "Hacker News Website".
Using this backend, users will be able to create new posts and update them. They are also able to comment and vote on different posts.

## Installation

Please first install Node.js and MySQL Shell on your computer.

Second,  update /config/connection.js file with your MySQL username and password.

Third, run the following commands inside your terminal:

```bash
git clone <from-repository-on-github>
npm install
node server.js
```
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Tests

You can use "Insomnia Core" or "Postman" to test different API routes for "users", "posts" and "conments". The following routes have been included in the backend:
1. Get all data
2. Get a single data using the ID
2. Post a new data
3. Put (update) a single data using the ID
4. Delete a single data using the ID

## Live-URL

This application is also deployed at Heroku. Please checkout the following link: 
[Live-URL-Users](https://just-tech-news-ss-042221.herokuapp.com/api/users)
[Live-URL-Posts](https://just-tech-news-ss-042221.herokuapp.com/api/posts)
[Live-URL-Comments](https://just-tech-news-ss-042221.herokuapp.com/api/comments)


## Screenshots

Here is an example of how posts' data should be returned in Insomnia Core:

[!alt=api-posts]()
