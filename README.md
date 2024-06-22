# masiv-test

This is my proposed solution to the test for junior frontend developer in masiv, I have named it comics fan.

# Comics Fan Application

This project is a Vue.js application for viewing random comic strips fetched from an API.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Testing](#testing)

## Overview

The Comics Fan Application fetches random comic strips using an external API and allows users to rate the comics. It provides a simple interface for generating and viewing comics, rating them, and displaying a "not found" message if a comic is unavailable.

## Features

- Generate and display random comic strips
- Rate comics with a 5-star rating system
- See a confetti shower when the score is high
- Display a custom message when a comic is not found
- See a spinner while the API responds

## Technologies Used

- Vue.js: Frontend framework for building the user interface
- Pinia: State management library for managing application state
- Axios: HTTP client for making API requests
- Tailwind CSS: Utility-first CSS framework for styling components
- PrimeVue: UI component library for Vue.js applications

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/moicanbas/masiv-test.git
   cd masiv-test
   ```

## Environment Variables
Create a .env file in the root directory of the project and add the following environment variable:
```bash
VITE_API_URL=/api
```

This variable is used to set the base URL for the API from which the comics are fetched.



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

## Usage

1. **Run the development server:**

   ```bash
   npm run dev
   ```

1. **Run the development server:**

    This will start the development server at http://localhost:3000 or on the specified port, or available.

## Testing
To run tests, use the following command:

```sh
npm test:unit
```


