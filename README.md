# NASA / SpaceX Launcher Data

App provides launch data on previous SpaceX flights and allows users to schedule their own flights, which will be handled by the API.

## Run Locally

Frontend runs on port 8000 - must run `Client` or `Watch` command

`http://localhost:8000/`

Clone the project

```bash
  git clone https://github.com/JustinDearden/NASA-Launcher.git
```

Go to the project directory

```bash
  cd NASA-Launcher
```

Insert your MongoDB connection string with the process.env variables inserted as shown

`MONGO_URL` -> `/services/mongo.js`

`To install this project run the commands in the root folder`

Install dependencies & the entire project (front and backend)

```bash
  npm run install
```

Run the server

```bash
  npm run server
```

Run the client

```bash
  npm run client
```

Run the both server and client `Easiest`

```bash
  npm run watch
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_PASSWORD`

`DATABASE_NAME`

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

#### Get all planets

```http
  GET /v1/planets
```

#### Get all launches

```http
  GET /v1/launches
```

#### Post new launch

```http
  POST /v1/launches/${id}
```

| Parameter    | Type     | Description                                                |
| :----------- | :------- | :--------------------------------------------------------- |
| `mission`    | `string` | **Required**. Mission name -- `any value`                  |
| `rocket`     | `string` | **Required**. Type of rocket -- `any value`                |
| `target`     | `string` | **Required**. Target planet -- `Select from approved list` |
| `launchDate` | `date`   | **Required**. Date of the launch -- `YYYY-MM-DD`           |

#### Delete a launch

```http
  DELETE /v1/launches/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **Required**. Flight number to delete |
