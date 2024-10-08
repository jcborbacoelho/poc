<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Image Deploy IBM
### Build Generate
```bash
docker build -t poc-tasy .
```

### Create new version image
```bash
docker tag poc-tasy icr.io/ns-poc-tasy/repo-poc-tasy:v2
```

### Login CR - Container Registry
```bash
ibmcloud cr login
```

### Push image to repository
```bash
docker push icr.io/ns-poc-tasy/repo-poc-tasy:v2
```

## License

Nest is [MIT licensed](LICENSE).
