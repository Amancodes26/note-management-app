# Note Management App

## Note Management App Backend

This README provides documentation for the backend of the Note Management App. The backend is built using Node.js and Express.js, and it handles the creation, retrieval, updating, and deletion of notes.

### Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/DevanshChhabra/note-management-app.git
    cd note-management-app/backend
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `backend` directory with the following content:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret (for eg. afece612a7a8a0eff5a6192f68be52051c87ac3f70168ec998b8814eb2b077ab)
    ```

4. **Start the server**

    ```sh
    npm start
    ```


### API Endpoints

#### Authentication

- **Register a new user**

    ```http
    POST /api/auth/register
    ```

    - **Body**:
        ```json
        {
          "name": "string",
          "email": "string",
          "password": "string"
        }
        ```

- **Login a user**

    ```http
    POST /api/auth/login
    ```

    - **Body**:
        ```json
        {
          "email": "string",
          "password": "string"
        }
        ```

#### Notes

- **Create a new note**

    ```http
    POST /api/notes
    ```

    - **Headers**:
        ```http
        x-auth-token: your_jwt_token
        ```

    - **Body**:
        ```json
        {
          "color": "string",
          "content": "string",
          "title": "string",
          "date": "ISO 8601 date string"
        }
        ```

- **Get all notes for the logged-in user**

    ```http
    GET /api/notes
    ```

    - **Headers**:
        ```http
        x-auth-token: your_jwt_token
        ```

- **Update a note**

    ```http
    PUT /api/notes/:id
    ```

    - **Headers**:
        ```http
        x-auth-token: your_jwt_token
        ```

    - **Body**:
        ```json
        {
          "color": "string",
          "content": "string",
          "title": "string",
          "date": "ISO 8601 date string"
        }
        ```

- **Delete a note**

    ```http
    DELETE /api/notes/:id
    ```

    - **Headers**:
        ```http
        x-auth-token: your_jwt_token
        ```

### Middleware

- **authMiddleware.js**

    This middleware verifies the JWT token and adds the user information to the request object.

### Controllers

- **authController.js**

    Handles user registration and login.

- **noteController.js**

    Handles CRUD operations for notes.

### Models

- **User.js**

    Defines the user schema and model.

- **Note.js**

    Defines the note schema and model.

### Configuration

- **db.js**

    Handles the connection to the MongoDB database using Mongoose.

