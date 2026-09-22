# 2023-intranet

**Live demo** https://unctad-infovis.github.io/2023-intranet/

## About

A design prototype for a redesigned UNCTAD staff intranet homepage (the real intranet is hosted on SharePoint at `unitednations.sharepoint.com/sites/UNCTAD_Intranet/`). Mocks up a welcome banner, quick links (organigram, etc.), an "SG activities" news feed, a staff board, and a footer showing the local time in UNCTAD's main locations.

Internal prototype only — not connected to live SharePoint data, and not deployed to production.

## Rights of usage

Contact Teemo Tebest.

## How to build and develop

This is a Webpack + React project.

* `npm install`
* `npm start`

Project should start at: http://localhost:8080

For developing please refer to `package.json`

## Files and folders

All public assets go to folder `public`.

All source code goes to folder `src`.

### Mount point

Single mount point, mounted in `src/index.js`:

| DOM id | Component | Content |
|---|---|---|
| `app-root-2023-intranet` | `src/jsx/App.jsx` | Nav, welcome/quick-links/news/staff-board rows, footer |

## Packages

The following packages are used in this project by default.

### Project specific

* **bootstrap** — layout grid, navbar and UI components
* **@popperjs/core** — positioning engine required by Bootstrap's dropdowns/tooltips/popovers

### Build & Dev Server

* **webpack** / **webpack-cli** / **webpack-dev-server** — development server and production bundler
* **babel-loader** + **@babel/preset-env** / **@babel/preset-react** — transpiles modern JS and JSX
* **html-webpack-plugin** / **copy-webpack-plugin** — injects the bundle into `index.html` / copies static assets
* **mini-css-extract-plugin** / **css-loader** / **css-minimizer-webpack-plugin** — extracts and minifies CSS
* **less** / **less-loader** — compiles stylesheets
* **file-loader** / **html-loader** — asset and HTML imports

### React

* **react** — UI component library
* **react-dom** — renders React components to the DOM

### Formatter & Linter

* **eslint** + **eslint-config-airbnb** (with **eslint-plugin-import**/**jsx-a11y**/**react**/**react-hooks**) — lints JS/JSX on save

### Minification

* **terser-webpack-plugin** — minifies the production JavaScript bundle
