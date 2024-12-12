# Angular Exercise Project  - FrontEndTools

This project contains a series of Angular exercises designed to explore and implement various features of Angular. Each section focuses on a specific topic, using Angular components, Material Design, and services.

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Features Implemented

### 1. Calculator Component
- **Description:** A functional calculator component built using Angular Material.
- **Key Features:**
  - Grid layout for calculator buttons.
  - Operations like addition, subtraction, multiplication, and division.
  - Clear and calculate functionality.

### 2. Feedback Page
- **Description:** A feedback component where users can provide feedback by sliding a rating scale.
- **Key Features:**
  - Uses Angular Material sliders.
  - Dynamically generated questions using a `Question` class.
  - Real-time updates based on slider input.
 
### 3. Form Validation
- **Template-Driven Forms:**
  - Implemented input validation using Angular directives.
  - Error handling for required fields, patterns, and lengths.
- **Reactive Forms:**
  - Created forms using `FormGroup` and `FormControl`.
  - Validation logic handled in TypeScript.
 
### 4. API Integration
- **Description:** Fetching and displaying data from the Finnkino API.
- **Key Features:**
  - Used `HttpClient` to make API calls.
  - Converted XML data to JSON using `xml2js`.
  - Displayed results in an Angular Material Expansion Panel.
 
### 5. Custom Pipes and Search Filters
- **Description:** A custom pipe for filtering displayed data.
- **Key Features:**
  - Implemented a search bar to filter results dynamically.
  - Integrated with Finnkino data for filtering news articles.
 
### 6. Admin View with Authentication
- **Description:** An admin section accessible only to logged-in users.
- **Key Features:**
  - Login component using `AuthService` for authentication.
  - Guard implementation (`authGuard`) to protect admin routes.
 
### 7. Toolbar Customization
- **Description:** A responsive toolbar featuring navigation and authentication links.
- **Key Features:**
  - Dynamic buttons for login and logout based on authentication state.
  - Displayed logged-in user's email in the toolbar.
 
## Technologies Used
- Angular
- Angular Material
- Firebase (for authentication, optional)
- RxJS
- TypeScript
- HTML5 and CSS3
  
## Development server

Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
