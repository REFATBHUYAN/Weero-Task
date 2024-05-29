# Ecommerce Wishlist Suggestion

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Configure your MongoDB Atlas connection string in `src/config/db.js`.
4. Insert example data into your MongoDB Atlas database:
    ```sh
    node src/insertExampleData.js
    ```
5. Start the server:
    ```sh
    npm start
    ```

## Example Data

Run the example data script to populate the database:
```sh
node src/insertExampleData.js
```
## API EndPoints

`GET /wishlist/:clientId/suggestions` here cleint id was `client1` for populate user:
```sh
GET /wishlist/client1/suggestions
```

