Country Information App
This is a Next.js application that allows users to browse a list of countries, view detailed information about each country, and compare countries based on specific attributes. The app uses the REST Countries API to fetch country data and Apollo Client for state management and caching.

Features
Country List: Displays a paginated list of countries with search functionality.

Country Details: Shows detailed information about a selected country, including capital, population, area, languages, and more.

Country Comparison: Allows users to compare two countries based on population, area, and GDP.

Error Handling: Displays user-friendly error messages and loading states during data fetching.

Technologies Used
Next.js: A React framework for server-side rendering and static site generation.

Apollo Client: A state management library for GraphQL and REST APIs.

REST Countries API: Provides country data in JSON format.

Styled Components: A CSS-in-JS library for styling React components.

Getting Started
Follow these steps to set up and run the project locally.

Prerequisites
Node.js (v16 or higher)

npm (v7 or higher)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm run dev
Open your browser and navigate to http://localhost:3000.

Project Structure
Copy
src/
├── app/
│   ├── page.js                # Main page (Country List)
│   ├── country/
│   │   └── [name]/
│   │       └── page.js        # Dynamic route for Country Details
│   ├── components/
│   │   ├── Pagination.js      # Pagination component
│   │   └── SearchBar.js       # Search bar component
│   ├── lib/
│   │   └── apolloClient.js    # Apollo Client configuration
│   └── styles/
│       └── GlobalStyles.js    # Global styles for the app
├── queries/
│   └── countries.js           # GraphQL queries for REST Countries API
Usage
Country List Page (/)
Displays a paginated list of countries.

Use the search bar to filter countries by name.

Click on a country name to view its details.

Country Details Page (/country/[name])
Displays detailed information about a selected country.

Includes capital, population, area, languages, and more.

Provides a link to return to the Country List page.

API Integration
The app uses the REST Countries API to fetch country data. The following endpoints are used:

All Countries: https://restcountries.com/v3.1/all

Country by Name: https://restcountries.com/v3.1/name/{name}

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes and push to the branch.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
REST Countries API for providing country data.

Apollo Client for state management and caching.

Next.js for the framework and server-side rendering.

Contact
If you have any questions or feedback, feel free to reach out:

Your Name: your-email@example.com

GitHub: your-username

Enjoy exploring the app! 🌍

Let me know if you need further customization or additional sections! 🚀

New chat
