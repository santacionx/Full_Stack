# Contact App

The Contact App is a simple web application built using Express.js, EJS, and MongoDB with Mongoose as the ODM (Object Data Modeling) tool. The app allows users to manage their contacts by adding new contacts with names and phone numbers and deleting existing contacts. All changes made to contacts are reflected in the backend MongoDB database.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new contacts with a name and phone number.
- Delete existing contacts from the contact list.
- Real-time updates to the backend MongoDB database.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm: Make sure Node.js and npm are installed on your machine. You can download them from the official website: https://nodejs.org/
- MongoDB: Install and set up MongoDB on your system. You can download it here: https://www.mongodb.com/try/download/community
- Git: If you want to clone the project from GitHub, make sure Git is installed on your machine. Download it here: https://git-scm.com/downloads

## Installation

1. Clone the repository using Git:

```bash
git clone https://github.com/your-username/contact-app.git
```

2. Navigate to the project directory:

```bash
cd contact-app
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the MongoDB server:

```bash
mongod
```

2. Run the application:

```bash
npm start
```

3. Open your web browser and visit: http://localhost:8000

4. You should see the Contact App home page where you can add and delete contacts.

## Technologies

The Contact App uses the following technologies:

- Express.js: A fast, unopinionated, minimalist web framework for Node.js.
- EJS (Embedded JavaScript): A templating engine that generates HTML with plain JavaScript.
- MongoDB: A NoSQL database for storing contact information.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the Contact App, feel free to create a pull request. Make sure to follow the coding conventions and submit a detailed description of your changes.

## License

The Contact App is open-source software licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
Feel free to customize this README further based on your specific project details. Happy coding!
