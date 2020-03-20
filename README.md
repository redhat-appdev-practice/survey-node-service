## survey-node-service

This repository contains the Node.js implementation of the survey group service RESTful API. <br/>
You can refer to our OpenAPI spec here: http://survey-openapi-consultant-360-dev.apps.shared-dev.dev.openshift.opentlc.com/#operation/createSubmission

### Local Installation

```
git clone https://gitlab.consulting.redhat.com/appdev-coe/consultant-360-feedback/survey-node-service.git
npm install
```

This installs all required dependencies.

### Running the application

```
npm start
```

This runs the application locally, using the environment variable `PORT` if you have defined it, or defaulting to port 8080.

## Deploying the application in Openshift

You can deploy to the existing projects in our cluster: https://console-openshift-console.apps.shared-dev.dev.openshift.opentlc.com/k8s/cluster/projects<br/>
Or you can deploy in your own cluster from OpenTLC or RHPDS.

#### Steps to build and deploy in Openshift

Refer to the instructions here: https://gitlab.consulting.redhat.com/appdev-coe/consultant-360-feedback/infrastructure/wikis/Deploying-A-Service <br/>

This is documentation for deploying the all of Consultant360's CI/CD pipelines and applications. 
Follow all the instructions to deploy the node service and the jenkins pipeline that will manage the build.
You will specifically deploy "survey-node-service".

### Manually testing the API

The best way to test the API manually is to use Postman and make calls to your service whether it's on localhost or Openshift. <br/>

Alternatively, you can use curl. Ex:
```
curl http://localhost:8080/surveyGroups/
```

### TODO write automated tests in Jest/Mocha