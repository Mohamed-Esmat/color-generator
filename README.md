# Color Generator

![Project Logo](https://res.cloudinary.com/tawfeer/image/upload/v1690293425/color-project_e2g6wm.png)

> A simple frontend demo project built with React that allows users to generate and explore a list of colors. Users can input a color value and its associated text, view the generated colors, copy the hex value to the clipboard, and receive toast messages for success and error events.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Setup](#setup)
  - [Form Component](#form-component)
  - [Values.js](#valuesjs)
  - [Render Colors](#render-colors)
  - [React-Toastify](#react-toastify)
  - [Create Color](#create-color)
  - [Clipboard](#clipboard)
- [CSS](#css)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Introduction

This repository contains a Color Generator project that showcases a color palette generated from user input. The application is built using React and utilizes various libraries like `values.js` and `react-toastify` to generate colors and provide toast notifications for user interactions.

## Getting Started

Follow the steps below to set up the Color Generator project.

### Setup

Create three components: Form, ColorList, and SingleColor.

In the App component, render the Form and ColorList components.

### Form Component

In the Form component, set up a color state value and a form with two input fields (color and text). Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.

Use the [HTML Color Input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) for the color input field.

### Values.js

Install the `values.js` library and use it to generate a list of colors in the App component.

```sh
npm install values.js
```

```js
import Values from 'values.js';
new Values('#f15025').all(10);
```

### Render Colors

Pass the colors list to the ColorList component.

In the ColorList component, iterate over the list of colors and render each one in a SingleColor component. Provide a unique id for each color to fix the key problem.

In the SingleColor component, display the hex value and weight (percent) of each color, and use inline CSS to set the background color of the component.

### React-Toastify

Import and set up the `react-toastify` library.

```sh
npm install react-toastify
```

```js
import 'react-toastify/dist/ReactToastify.css';
```

In App.jsx, create logic to generate a new list of colors when the user submits a new color value. Use `react-toastify` to display an error message if the `values.js` library cannot generate a color, and also display a toast message if the user tries to submit an empty value.

### Clipboard

In the SingleColor component, set up a click handler that saves the hex value of the color to the browser clipboard using the Clipboard API.

The Clipboard API allows web developers to interact with the user's clipboard, including reading and writing data to it. Here is an example of how to save a string value to the clipboard using the Clipboard API:

```js
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (error) {
    console.error('Failed to copy text: ', error);
  }
}

const textToCopy = 'Hello, world!';
copyToClipboard(textToCopy);
```

## CSS

```css
.colors {
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}
```

- `min-height: calc(100vh - 160px);`: This line sets the minimum height of the element. It uses the `calc()` function to subtract 160 pixels from the viewport height (`100vh`). The viewport height unit (`vh`) is relative to the height of the browser window. This means the element will take up at least the full viewport height minus 160 pixels.

- `display: grid;`: This line sets the element's display property to `grid`, enabling the use of the CSS Grid Layout module to arrange its child elements in a grid format.

- `grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));`: This line defines the number of columns and their width in the grid. The `repeat()` function is used with the `auto-fit` keyword, which automatically calculates the number of columns based on the container's width and the minimum and maximum column widths specified in `minmax(223.33px, 1fr)`. The minimum width is set to 223.33 pixels, while the maximum width is set to 1 fraction (`1fr`) of the available space.

- `grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));`: This line defines the number of rows and their height in the grid, similar to the previous property. The `repeat()` function is used with the `auto-fit` keyword, and the `minmax()` function defines the minimum row height as 96 pixels and the maximum height as 1 fraction (`1fr`) of the available space.

## Usage

To use the Color Generator project, follow the steps below:

1. **Clone the repository:** Start by cloning this repository to your local machine using the following command:

```sh
git clone https://github.com/Mohamed-Esmat/color-generator.git
```

2. **Navigate to the project directory:** Change your working directory to the project folder:

```sh
cd color-generator
```

3. **Install dependencies:** Install the necessary dependencies by running:

```sh
npm install
```

4. **Start the development server:** Run the development server to see the Color Generator project in action:

```sh
npm run dev
```

5. **Explore the Color Generator:** Once the development server is running, open your web browser and navigate to `http://localhost:3000`. You will be able to input colors and text, view the generated colors, and copy the hex value to the clipboard.

## Contributing

We appreciate and welcome contributions to enhance the project! To contribute, follow these steps:

1. **Fork the repository:** Start by forking this repository to your GitHub account using the "Fork" button at the top right corner of the repository page.

2. **Clone your fork:** Clone the forked repository to your local machine using the following command:

```sh
git clone https://github.com/Mohamed-Esmat/color-generator.git
```

3. **Navigate to the project directory:** Change your working directory to the project folder:

```sh
cd color-generator
```

4. **Install dependencies:** Install the necessary dependencies by running:

```

sh
npm install
```

5. **Start the development server:** Run the development server to see the Color Generator project in action:

```sh
npm run dev
```

6. **Make your changes:** Implement your changes or add new features to the project.

7. **Commit your changes:** Commit your changes with clear and descriptive commit messages:

```sh
git commit -m "Add your descriptive commit message here"
```

8. **Push your changes:** Push your changes to your forked repository:

```sh
git push origin main
```

9. **Create a pull request:** Open a pull request (PR) against the main repository. Ensure that you provide a clear description of your changes in the PR.

We value your contributions and will review your pull request as soon as possible. Together, we can make this project even better!

## License

This project is licensed under the [MIT License](LICENSE.md). Feel free to use, modify, and distribute the code.

## Acknowledgements

We would like to thank the following resources and communities for their support and inspiration:

- [Figma Design](https://www.figma.com/file/P2SJ5QGOZvi49EOpoVTvsT/Color-generator?node-id=0%3A1&t=ZY2gnIJ9zGTSXPW8-1) for providing the visual reference for the project.
- [values.js](https://github.com/noeldelgado/values.js/blob/master/README.md) for the library that generates colors from input values.
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction) for providing toast notifications for user interactions.

## Contact

If you have any questions or suggestions regarding the project or want to report an issue, feel free to contact us at:

- **Email:** [msmt0452@gmail.com](mailto:msmt0452@gmail.com)
- **GitHub:** [Mohamed-Esmat](https://github.com/Mohamed-Esmat)

Enjoy exploring the Color Generator! If you have any other requests or need further adjustments, let me know, and I'll be happy to assist you. Thank you for checking out the project! 🎨