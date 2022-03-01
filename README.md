
# Fizzbuzz

_Leboncoin's technical test_

A simple fizzbuzz server with statistics.

# Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Assignment](#assignment)
- [Tech](#tech)
- [Running the server](#running-the-server)
  - [Cloning the repo](#cloning-the-repo)
  - [Start the app](#start-the-app)
      - [Development](#development)
      - [Production](#production)
  - [Testing the app](#testing-the-app)
      - [Writing tests](#writing-tests)
      - [Executing tests](#executing-tests)
- [Endpoints](#endpoints)
    - [GET `/`](#get-)
    - [GET `/fizzbuzz`](#get-fizzbuzz)
    - [GET `/statistics`](#get-statistics)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Assignment
_Your goal is to implement a web server that will expose a REST API endpoint that:_

_Accepts five parameters : three integers int1, int2 and limit, and two strings str1 and str2._

_Returns a list of strings with numbers from 1 to limit, where: all multiples of int1 are replaced by str1, all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2._

_The server needs to be:_

_Ready for production_

_Easy to maintain by other developers_

_- Add a statistics endpoint allowing users to know what the most frequent request has been._

_This endpoint should:_

_- Accept no parameter_

_- Return the parameters corresponding to the most used request, as well as the number of hits for this request"_


# Tech

This fizzbuzz project uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Redis] -  in-memory data structure store, used as a database, cache, and message broker
- [Docker] -  open platform for developing, shipping, and running applications
- [Docker-compose] -  tool for defining and running multi-container Docker applications
- [dillinger] - online markdown editor

# Running the server

This fizzbuzz server requires [docker] and [docker-compose] to run.

## Cloning the repo
Clone the project:

```bash
git clone https://github.com/INanaay/fizz-buzz.git
cd fizz-buzz
```

## Start the app

#### Development

This server uses [nodemon] to automatically restart the server if any file has changed.

To run the server in development :


```sh
docker-compose  -f docker-compose.yml -f docker-compose.dev.yml up --build
```
#### Production

To run the server in production :
```sh
docker-compose up --build
```

To down the containers:
```sh
docker-compose down -v 
```


Docker will handle the installation of all necessary dependencies of the projet.
With Docker and Docker-compose, it is very easy to deploy this server to almost any platform.

## Testing the app

This project uses [jest] and [supertest] to execute tests.

#### Writing tests

To write tests, you can create new files following this naming convention : `filename.test.js`.
Dont forget to replace `filename` by the name of your choice.

#### Executing tests

To exexcute the tests, make sure your containers are running, and execute this command :

```sh
docker-compose run api npm run test
```  

# Endpoints

_**Please note that the db is not persistent, and that it will be reset at each execution.**_
### GET `/`

An endpoint that will return 200 if the server is up and running.

### GET `/fizzbuzz`


This endpoint returns a list of strings with numbers from 1 to limit, where all multiples of int1 are replaced by str1, all multiples of int2 are replaced by str2, all multiples of int1 and int2 are replaced by str1str2

It needs the following params : 

| Name      |Ttype |
| ----------- | ----------- |
| int1      | integer      |
| int2   | integer       |
| limit   | int        |
| str1   | string        |
| str2   | string        |

Example:
`/api/v1/fizz-buzz?int1=2&int2=3&limit=10&str1=foo&str2=bar`


And returns :

**200** if the request was sucessfully executed, and the response in the body. 

```json
["1","foo","bar","foo","5","foobar","7","foo","bar","foo"]
```

**400** if any param is wrong. 

### GET `/statistics`

An endpoint allowing users to know what the most frequent request has been.

It does not accept any params, and will return:

**200** if the request was sucessfully executed, and the response in the body. 

```json
["1","foo","bar","foo","5","foobar","7","foo","bar","foo"]
```

**400** if any param is wrong. 


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [redis]: <https://redis.io/>
   [docker]: <https://www.docker.com/>
   [docker-compose]: <https://www.docker.com/>
 [dillinger]: <https://dillinger.io/>
  [nodemon]: <https://www.npmjs.com/package/nodemon/>
   [jest]: <https://jestjs.io/>
   [supertest]: <https://www.npmjs.com/package/supertest>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>