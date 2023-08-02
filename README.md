# AdOpt SDK

The `adopt-sdk` is a powerful toolkit that enables seamless integration with our API services. It provides a collection of utility functions and classes to simplify the process of interacting with our platform. This README will guide you through the installation, usage, and testing procedures for the `adopt-sdk`.

## Installation

To install the `adopt-sdk` package, you can simply add it as a dependency in your project's `package.json` file:

```json
"dependencies": {
  "@goadopt/adopt-sdk": "latest"
}
```

Alternatively, you can use the following npm command to install the package:

```bash
npm install @goadopt/disclaimer-api
```

## Automatic Versioning and Publishing

The version of the package will be automatically published to npm whenever a new commit is made to the repository. This process is managed through a GitHub Actions pipeline, and the published package will be available on npm with the latest changes. Be sure to change the version in the package.json file after committing a new change.

## Usage

1. Build the Package:
   Before using the `disclaimer-api`, you need to build the package. To do this, navigate to the root folder of the package and run the following command:

   ```bash
   npm run build
   ```

2. Testing Locally:
   To test the package locally, you can use npm link. First, navigate to the "test" folder, and then link the package using the following command:

   ```bash
   cd test
   npm link ../path_to_the_package
   ```

   By doing this, the `disclaimer-api` will be installed in your "test" project, and you can now use TypeScript (tsc) to compile your code.

3. Compiling TypeScript to JavaScript:
   Use TypeScript (tsc) to compile the TypeScript files into JavaScript. Run the following command in the root folder of your project:

   ```bash
   tsc
   ```

4. Running the Test Application:
   After compiling the TypeScript files, you can run your test application using Node.js. Run the following command:

   ```bash
   node dist/app.js
   ```

## Access to Organization Account

To access the npm organization account that owns the `disclaimer-api` package, please reach out to the individuals involved in the development and maintenance of the project. They can provide you with the necessary permissions to make contributions or publish updates to the package.

Organization owner: `hey@goadopt.io`

Happy coding!
