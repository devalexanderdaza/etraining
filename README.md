# Monorepo Project

This repository is a monorepo managed with TurboRepo. It contains multiple projects within the `apps` directory.

## Table of Contents

- [Monorepo Project](#monorepo-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Projects](#projects)
  - [Getting Started](#getting-started)
  - [Scripts](#scripts)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This monorepo is designed to streamline the development process by managing multiple projects in a single repository. TurboRepo helps in optimizing the build and development workflows.

## Projects

The `apps` directory contains the following projects:

1. **E-Learning Platform**: A comprehensive platform for online education.
2. **Admin Dashboard**: A dashboard for managing users and content.
3. **Mobile App**: A mobile application for accessing the e-learning platform on the go.

## Getting Started

To get started with this monorepo, follow these steps:

1. Clone the repository:

  ```sh
  git clone https://github.com/yourusername/your-repo.git
  ```

2. Navigate to the repository directory:

  ```sh
  cd your-repo
  ```

3. Install dependencies:

  ```sh
  npm install
  ```

4. Run the development server for a specific project:

  ```sh
  npm run dev --workspace=apps/e-learning-platform
  ```

## Scripts

The following scripts are available in this monorepo:

- `npm run build`: Build all projects.
- `npm run dev`: Start the development server for all projects.
- `npm run lint`: Lint all projects.
- `npm run test`: Run tests for all projects.

## Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
