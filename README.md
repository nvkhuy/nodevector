# Node.js with pgvector

This repository integrates **Node.js** with **pgvector**, enabling efficient similarity searches and vector storage in PostgreSQL.

## Getting Started

### Developer Setup
To set up the development environment:

```bash
. ./developer_setup.sh
```

### Docker Setup
To run the application using Docker:

```bash
docker-compose up --build
```

## Features
- Integration of pgvector for handling vector similarity searches.
- Seamless setup with Docker for streamlined development and testing.
- Easy-to-use developer scripts for local environment setup.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) with the pgvector extension installed
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/node-pgvector.git
   cd node-pgvector
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application using Docker:
   ```bash
   docker-compose up --build
   ```

4. Alternatively, run locally for development:
   ```bash
   . ./developer_setup.sh
   ```

## Usage
This project provides an example integration of pgvector with a Node.js backend. You can use it as a template for applications requiring vector-based data queries.

### Sample Query
Ensure your database is configured with the `pgvector` extension:
```postgresql
CREATE EXTENSION IF NOT EXISTS vector;
```

You can then store and query vector data, for example:
```postgresql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  embedding VECTOR(3)
);

INSERT INTO items (embedding) VALUES ('[1, 2, 3]');

SELECT * FROM items
ORDER BY embedding <-> '[1, 1, 1]';
```

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with detailed descriptions of your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements
- [pgvector Documentation](https://github.com/pgvector/pgvector)
- [Node.js Official Site](https://nodejs.org/)
- [Docker Documentation](https://docs.docker.com/)
