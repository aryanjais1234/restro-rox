# Restaurant Web Page

Welcome to the restaurant web page project! This project showcases a web page for a restaurant with various sections like menu, reviews, events, sustainability, and more.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

### Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd restaurant-web-page
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

### Running the API

The restaurant data is served through a simple JSON server. Make sure you have the `db.json` file in the `server` folder.

1. **Navigate to the server folder:**

    ```bash
    cd server
    ```

2. **Install JSON Server:**

    ```bash
    npm install -g json-server
    ```

3. **Run the JSON Server:**

    ```bash
    json-server --watch db.json --port 3001
    ```

### Running the Web Page

1. **Navigate back to the project root:**

    ```bash
    cd ..
    ```

2. **Start the React app:**

    ```bash
    npm start
    ```

3. **Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the restaurant web page.**

## API Details

The API is structured to provide data for various sections of the web page.

- **Restaurant Data:** [http://localhost:3001/restaurant](http://localhost:3001/restaurant)
- **Menu:** [http://localhost:3001/menu](http://localhost:3001/menu)
- **Reviews:** [http://localhost:3001/reviews](http://localhost:3001/reviews)
- **Events:** [http://localhost:3001/events](http://localhost:3001/events)
- **Sustainability Initiatives:** [http://localhost:3001/sustainability](http://localhost:3001/sustainability)

Feel free to explore these endpoints and customize the web page as needed!

