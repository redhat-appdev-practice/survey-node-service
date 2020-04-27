## Node.Js ReSTful API Example
The App Dev Practice has create a Node.Js application that expose a ReSTful API.  The application can be used as a starter Node.Js application or as a unit to deploy to OCP clusters.

## Survey Groups API
The application manages the concept of a **Survey Group**.  This represents the target of surveys for a Red Hat consulting project, the skills required to cmoplete the project, and the employee(s) assigned to the project.

## API Definition
This service is built in a contract-first manner.  You can find the API definition hosted at https://studio.apicur.io/apis/26569.

### Local Installation

```
git clone https://github.com/redhat-appdev-practice/survey-node-service.git
npm install
```

This installs all required dependencies.

### Running the application

```
npm start
```

This runs the application locally, using the environment variable `PORT` if you have defined it, or defaulting to port 8080.

## Deploying the application in Openshift

This service comes ready to deploy in an Openshift cluster using the provided Jenkinsfile.


#### Steps to build and deploy in Openshift

Refer to the instructions here: https://github.com/redhat-appdev-practice/infrastructure/wikis/Deploying-A-Service <br/>

This is documentation for deploying the all of Consultant360's CI/CD pipelines and applications. 
Follow all the instructions to deploy the node service and the jenkins pipeline that will manage the build.
You will specifically deploy "survey-node-service".

### Manually testing the API

The best way to test the API manually is to use Postman and make calls to your service whether it's on localhost or Openshift. <br/>

Alternatively, you can use curl. Ex:
```
curl http://localhost:8080/surveyGroups/
```
