# Movie Search App

## Project Description
A simple Next.js application built to help learn Next.js, React, and Typescript. This project focuses on working with APIs, managing state, handling pagination, and utilising session storage. Users can perform searches, view movie details, while session storage retains previous searches.

This uses the [OMDB API](https://www.omdbapi.com) to fetch movie data, including search results and detailed information for selected movies.

### Built Using
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

## Installation
### Prerequisites
Before running the project, ensure you have the following installed
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com)

### Steps to Setup
1. **Clone the project and navigate to the directory**
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Get an OMDB API Key**  
   This project uses the [OMDB API](https://www.omdbapi.com/apikey.aspx) to fetch movie data.  

   - Visit [OMDB API](https://www.omdbapi.com/apikey.aspx)  
   - Sign up for an API key (free or paid version)  
   - Once you receive your API key, store it in an environment variable  

4. **Set Up Environment Variables**  
   Create a **.env.local** file in the root of your project and add your API key
   ```sh
   OMDB_API_KEY=your_api_key_here
   ```

5. **Run the Development Server**
    ```sh
    npm run dev
    ```

6. **Open the App**  
   The application should now be running at http://localhost:3000 