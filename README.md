# GoDrive - Vehicle Rental Platform

## Project Overview

GoDrive is a modern web application designed to facilitate vehicle rentals. It serves as a platform where users can list their vehicles for rent and also browse available vehicles for their own rental needs. This dual functionality allows both vehicle owners and renters to interact seamlessly within the same site. Users can create rental proposals and register their vehicles, each with its own dedicated forms and API interactions. The API calls are simulated using JSON files located in the `data` folder.

The application features a robust routing structure managed by Modern.js, where each folder within the `routes` directory corresponds to a literal route in the browser. This means that the organization of your files directly reflects the navigation structure of the application, making it intuitive to manage and extend. Authentication is handled through the presence of a token in local storage, ensuring secure access to the application.

## Libraries Used

- **Tailwind CSS**: This utility-first CSS framework is used for styling the application, allowing for rapid design and customization of the user interface with a responsive layout.

- **Ant Design (antd)**: A comprehensive UI framework that provides a set of high-quality React components. It enhances the user experience with pre-built components that are easy to integrate and customize.

- **React Query**: This powerful data-fetching library simplifies the process of managing server state in React applications. It provides hooks for fetching, caching, and synchronizing server data, making it easier to handle API interactions and improve performance.

## Setup

To set up the GoDrive project, follow these steps:

1. **Install the dependencies**: Run the following command in your terminal to install all necessary packages:
   ```bash
   npm install
   ```

2. **Start the development server**: After the installation is complete, you can start the application with:
   ```bash
   npm start
   ```

This will launch the application in your default web browser, allowing you to view and interact with the GoDrive platform.

### About Modern.js

Modern.js is a powerful framework that simplifies the development of modern web applications. It provides a robust routing structure, allowing developers to easily manage and extend their applications. With features like server-side rendering, static site generation, and built-in support for TypeScript, Modern.js enhances the development experience and improves application performance. By leveraging Modern.js, GoDrive benefits from a streamlined architecture that facilitates both vehicle listing and rental functionalities seamlessly.
