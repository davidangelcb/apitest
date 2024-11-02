<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the Serverless Framework.'
layout: Doc
framework: v4
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, Inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Serverless Framework Node Express API on AWS

This template demonstrates how to develop and deploy a simple Node Express API service running on AWS Lambda using the Serverless Framework.

This template configures a single function, `api`, which is responsible for handling all incoming requests using the `httpApi` event. To learn more about `httpApi` event configuration options, please refer to [httpApi event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/). As the event is configured in a way to accept all incoming requests, the Express.js framework is responsible for routing and handling requests internally. This implementation uses the `serverless-http` package to transform the incoming event request payloads to payloads compatible with Express.js. To learn more about `serverless-http`, please refer to the [serverless-http README](https://github.com/dougmoscrop/serverless-http).

## Usage

### Deployment

Install dependencies with:

```
npm install
```

and then deploy with:

```
serverless deploy
```

After running deploy, you should see output similar to:

```
Deploying "aws-node-express-api" to stage "dev" (us-east-1)

✔ Service deployed to stack aws-node-express-api-dev (96s)

endpoint: ANY - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: aws-node-express-api-dev-api (2.3 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [`httpApi` event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

### Local development

1.- Update Files configuration


``` 
copy **secrets.example.json** as **.secrets.json** and update with the keys

Note: for Unit test you need instance of MySql for test:
copy **env.example** as **.env** and update with the keys
```


2.- run dependencies

``` 
npm install
```


3.- run next comand:

```
serverless offline

```
 
or  command to Hot reload code updates

```
serverless offline start --reloadHandler
```

 After running, you should see output similar to:

```
    ───────────────────────────────────────────────────────────────────────┐
   │                                                                       │
   │   ANY  | http://localhost:3000/{default*}                             │
   │   POST | http://localhost:3000/2015-03-31/functions/api/invocations   │
   │                                                                       │
   └───────────────────────────────────────────────────────────────────────┘

Server ready: http://localhost:3000 
```

## Rutas  V1/

| Método | Ruta              | Descripción                | Ejemplo de Solicitud                                   |
|--------|-------------------|----------------------------|--------------------------------------------------------|
| GET    | `/v1/clients`    | All clients                | `curl -X GET http://localhost:3000/v1/clients`        |
| POST   | `/v1/clients`    | Create new client          | `curl -X POST http://localhost:3000/v1/clients -H "Content-Type: application/json" -d '{"firstname": "O..","lastname": "Fer..","dni": 32343456,"age": 29,"linkedin": "linkedin.com"}'` |
| GET    | `/v1/clients/:id`| Client by ID               | `curl -X GET http://localhost:3000/v1/clients/1`      |

## Rutas  swapi/

| Método | Ruta              | Descripción                | Ejemplo de Solicitud                                   |
|--------|-------------------|----------------------------|--------------------------------------------------------|
| GET    | `/swapi/films/:id`  | Films by ID                | `curl -X GET http://localhost:3000/swapi/films/1`        |
| GET    | `/swapi/films`      |  all films               | `curl -X GET http://localhost:3000/swapi/films`        |
| GET    | `/swapi/people/:id` | people by ID               | `curl -X GET http://localhost:3000/swapi/people/1`       |
| GET    | `/swapi/people`      |  all people               | `curl -X GET http://localhost:3000/swapi/people`        |
| GET    | `/swapi/planets/:id`| planets by ID              | `curl -X GET http://localhost:3000/swapi/planets/1`      | 
| GET    | `/swapi/planets`      |  all planets               | `curl -X GET http://localhost:3000/swapi/planets`        |
| GET    | `/swapi/species/:id`| species by ID              | `curl -X GET http://localhost:3000/swapi/species/1`      |
| GET    | `/swapi/species`      |  all species               | `curl -X GET http://localhost:3000/swapi/species`        |
| GET    |`/swapi/starships/:id`| starships by ID           | `curl -X GET http://localhost:3000/swapi/starships/3`    |
| GET    | `/swapi/starships`      |  all starships               | `curl -X GET http://localhost:3000/starships`        |
| GET    |`/swapi/vehicles/:id`| vehicles by ID             | `curl -X GET http://localhost:3000/swapi/vehicles/4`     |
| GET    | `/swapi/vehicles`      |  all vehicles               | `curl -X GET http://localhost:3000/vehicles`        |



### Demo

```
https://08pb3qbagd.execute-api.us-east-1.amazonaws.com/
```

### Doc
```
https://08pb3qbagd.execute-api.us-east-1.amazonaws.com/api-docs/sw-docs.html
```

