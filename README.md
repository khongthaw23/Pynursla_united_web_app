# Pynursla United Football Club Web Application

This is a React-based web application for Pynursla United Football Club, featuring:
- Homepage with hero section, stats, upcoming matches, and latest news
- Dedicated News section with search and category filtering
- Player Profiles with detailed information and statistics
- Match Schedules for upcoming fixtures and recent results
- Photo Gallery with image categories and a lightbox viewer
- Contact Form for inquiries and club contact details
- Merchandise Store for official club products

## Technologies Used
- React
- Tailwind CSS
- Radix UI (for UI components)
- React Router DOM (for navigation)
- Lucide React (for icons)

## Setup and Installation

**Note:** This project uses `pnpm` as its package manager. If you don't have `pnpm` installed, you can install it globally using npm:
`npm install -g pnpm`

1.  **Clone the repository (if applicable) or extract the zip file.**

2.  **Navigate to the project directory:**
    ```bash
    cd pynursla-united-fc
    ```

3.  **Install dependencies:**
    ```bash
    pnpm install
    ```

## Running the Application

To run the application in development mode:

```bash
pnpm run dev
```

This will start the development server, and you can view the application in your browser, usually at `http://localhost:5173` (the port might vary).

## Building for Production

To build the application for production:

```bash
pnpm run build
```

This will create a `dist` directory in your project, containing the optimized production build of your application. You can then deploy the contents of this `dist` directory to any static site hosting service (e.g., Netlify, Vercel, GitHub Pages, Apache, Nginx).

## Project Structure

- `src/`: Contains the main source code of the React application.
  - `App.jsx`: Main application component with routing setup.
  - `components/`: Reusable UI components (e.g., Header, Footer, UI components from Radix UI).
  - `pages/`: Individual page components (e.g., Home, News, Players, Matches, Gallery, Contact, Store).
  - `lib/utils.js`: Utility functions for Tailwind CSS class merging.
- `public/images/`: Directory for static image assets used in the application.
- `index.html`: Main HTML file.
- `package.json`: Project metadata and dependencies.
- `vite.config.js`: Vite configuration for the React project.

Feel free to explore and modify the code to further customize the web application for Pynursla United Football Club.

