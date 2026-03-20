# playwright-practice

A simple Playwright test suite for practicing end-to-end (combining api and ui) testing patterns.

## ✅ Prerequisites

- Node.js (>= 18) / npm
- Browsers installed via Playwright (see setup)

## 🚀 Setup

```bash
npm install
npx playwright install
```

## ▶️ Run tests

Run the full suite:

```bash
npm test
```

Run a single test file:

```bash
npx playwright test tests/account/user.spec.ts
```

Run in headed mode (opens browser window):

```bash
npx playwright test --headed
```

## Project structure

- `playwright.config.ts` – Playwright configuration
- `tests/` – Test suites and page objects
  - `account/` – Account-related tests
  - `auth/` – Authentication tests
  - `checkout/` – Checkout/cart tests
  - `fixtures/` – Test fixtures for shared setup
  - `utils/` – Helpers and utilities

## Notes

- Tests use Playwright Test fixtures defined under `tests/fixtures`.
- Adjust base URLs and test data in fixtures as needed.
- Use EvilTester example [basicart](https://testpages.eviltester.com/apps/basiccart/) application as target.
- Run tests on container.
- Run tests on Github actions.

## Focus practice
- Solve common scenarios on automation.
- Combine api and ui usage in one single test.
- Use fixtures as common steps to avoid code duplication.
- Use POM to provide maintanability.
- Set sessionStorage and log in as authenticated user.
- Mock api response to emulate failed response.
- Accessibility check on a broken site.
- Aim to address some important points on automation pointed out by Soujorit Das in this [post](https://medium.com/p/447c08416174).