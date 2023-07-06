# EJS Mobile Number Directory Project

This project is a mobile number directory implemented using Express.js, MongoDB, and EJS (Embedded JavaScript) for the templating engine. It allows users to add, update, and delete contact details, and view a list of contacts.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the project root directory and add the following environment variables:

   ```
   PORT=<port_number>
   connectionString=<mongodb_connection_string>
   ```

   Replace `<port_number>` with the desired port number for your server, and `<mongodb_connection_string>` with the connection string for your MongoDB database.

## Usage

1. Start the server:

   ```
   npm start
   ```

2. Open a web browser and go to `http://localhost:<port_number>` to access the mobile number directory.

## Directory Structure

```
- app.js         # Main application file
- package.json   # Project metadata and dependencies
- views/
  - pages/
    - index.ejs        # Home page view
    - contact.ejs      # Contact list view
  - partials/
    - head.ejs         # HTML head section partial
    - navbar.ejs       # Navigation bar partial
    - form.ejs         # Contact form partial
    - footer.ejs       # Footer partial
- public/
  - css/
    - style.css        # Custom CSS styles
- README.md       # Project documentation (you are here)
```
