# AutomationExercise Cypress Test Suite

This project contains end-to-end tests for [automationexercise.com](https://automationexercise.com) using [Cypress](https://www.cypress.io/).  
It covers user registration, login, product search, cart operations, checkout, subscription, file upload, invoice download, and more.

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Running Tests](#running-tests)
- [Plugins Used](#plugins-used)
- [GitHub Actions CI](#github-actions-ci)
- [Writing and Extending Tests](#writing-and-extending-tests)
- [Troubleshooting](#troubleshooting)

---

## Features

- User registration and login (with positive and negative scenarios)
- Product search, view, and add to cart
- Cart quantity and total verification
- Checkout and order placement (with dynamic user data via Faker)
- File upload in contact form
- Subscription verification (home and cart pages)
- Category and brand navigation
- Invoice download verification
- Scroll up/down functionality
- Review submission for products

---

## Project Structure

```
AutomationExercise/
├── cypress/
│   ├── downloads/           # Downloaded files (e.g., invoices)
│   ├── e2e/
│   │   └── AutomationExercise.cy.js  # Main Cypress test file
│   ├── fixtures/
│   │   ├── regData.json     # Registration data (auto-generated)
│   │   ├── checkoutReg.json # Checkout registration data (auto-generated)
│   │   └── example.json     # Example file for upload tests
│   └── support/
│       └── commands.js      # Custom Cypress commands (if any)
├── .github/
│   └── workflows/
│       └── cypress.yml      # GitHub Actions workflow for CI
├── package.json
├── cypress.config.js
└── README.md
```

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Muyundo/automationExercise.git}
   cd AutomationExercise
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add required files:**
   - Place any files needed for upload (e.g., `example.json`) in `cypress/fixtures/`.

4. **Cypress configuration:**
   - The default downloads folder is `cypress/downloads`.
   - You can adjust settings in `cypress.config.js`.

---

## Running Tests

### Open Cypress Test Runner (interactive mode)
```bash
npx cypress open
```

### Run Tests in Headless Mode
```bash
npx cypress run
```

---

## Plugins Used

- [cypress-file-upload](https://github.com/abramenal/cypress-file-upload)  
  For file upload functionality in tests.
  - **Install:**  
    ```bash
    npm install --save-dev cypress-file-upload
    ```
  - **Usage:**  
    Imported in your test file with:
    ```js
    import 'cypress-file-upload'
    ```

- [@faker-js/faker](https://github.com/faker-js/faker)  
  For generating random user data.
  - **Install:**  
    ```bash
    npm install --save-dev @faker-js/faker
    ```
  - **Usage:**  
    ```js
    const { faker } = require("@faker-js/faker")
    ```

---

## GitHub Actions CI

Automated tests run on every push and pull request using GitHub Actions.

### `.github/workflows/cypress.yml`

```yaml
name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Run Cypress tests
        uses: cypress-io/github-action@v6
        with:
          record: false
          browser: chrome
        env:
          # Add any required secrets here
          # CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```

**Note:**  
- If you want to record runs to the Cypress Dashboard, set `record: true` and add your `CYPRESS_RECORD_KEY` to repository secrets.

---

## Writing and Extending Tests

- All main tests are in `cypress/e2e/AutomationExercise.cy.js`.
- Use [Cypress best practices](https://docs.cypress.io/guides/references/best-practices) for selectors and assertions.
- Use Faker for dynamic data.
- For file download assertions, use `cy.readFile` to check the file exists in `cypress/downloads`.

---

## Troubleshooting

- **File upload not working?**  
  Ensure `cypress-file-upload` is installed and imported.

- **Invoice download verification:**  
  Cypress can only check that the file exists in the downloads folder, not the browser's native download bar.

- **Selectors not matching?**  
  Inspect the page and update selectors as needed.

- **GitHub Actions failing?**  
  Check the workflow logs for missing dependencies or misconfigured secrets.

---

## License

MIT

---

## Credits

- [Cypress](https://www.cypress.io/)
- [Faker](https://github.com/faker-js/faker)
- [cypress-file-upload](https://github.com/abramenal/cypress-file-upload)
