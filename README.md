# Blog App

This project is a React-based blog application developed as part of a React course. It leverages several modern technologies and libraries to provide a robust and user-friendly experience.

## Features

- **Dynamic Post Display**: Fetches and displays posts from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/).
- **Random Image Generation**: Utilizes the [Picsum API](https://picsum.photos/) to generate random images for each post.
- **Routing**: Implements client-side routing using `react-router-dom` for seamless navigation.
- **Form Handling and Validation**: Incorporates `react-hook-form` for efficient form handling and `zod` for schema-based form validation.
- **UI Components**: Employs `shadcn` components styled with `tailwindcss` for a consistent and responsive design.

## Technologies Used

- **React**
- **Vite**
- **TypeScript**
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **shadcn**: A collection of pre-designed components built with Radix UI and styled with Tailwind CSS.
- **React Router DOM**: Enables dynamic routing in the application.
- **React Hook Form**: Simplifies form management in React.
- **Zod**: A TypeScript-first schema declaration and validation library.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/hyna42/blog-app.git
   cd blog-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:5173`.

## Project Structure

The project follows a standard React application structure:

- **`src/`**: Contains the main source code.
  - **`components/`**: Reusable UI components.
  - **`pages/`**: Page components corresponding to different routes.
  - **`App.tsx`**: The root component that sets up routing.
  - **`index.tsx`**: Entry point of the application.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License


