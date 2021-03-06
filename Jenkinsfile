library identifier: "pipeline-library@v1.5",
retriever: modernSCM(
  [
    $class: "GitSCMSource",
    remote: "https://github.com/redhat-cop/pipeline-library.git"
  ]
)

openshift.withCluster() {
  env.NAMESPACE = openshift.project()
  env.APP_NAME = "survey-service-node"
  echo "Starting Pipeline for ${APP_NAME}..."
  env.DEV = env.NAMESPACE.replaceAll(/-ci-cd/, '-dev')
  env.TEST = env.NAMESPACE.replaceAll(/-ci-cd/, '-test')
  env.DEMO = env.NAMESPACE.replaceAll(/-ci-cd/, '-demo')
}

pipeline {
  // Use Jenkins Maven slave
  // Jenkins will dynamically provision this as OpenShift Pod
  // All the TESTs and steps of this Pipeline will be executed on this Pod
  // After Pipeline completes the Pod is killed so every run will have clean
  // workspace
  agent {
    label 'jenkins-slave-npm'
  }

  // Pipeline TESTs start here
  // Requeres at least one TEST
  stages {

    // Run NPM build, skipping tests
    stage('Build'){
      steps {
        sh "npm install"
        // sh "npm run build"   // Build step is not required because there is no transpiling needed
      }
    }

    // Run NPM unit tests
    stage('Unit Test') {   // No tests have yet been written
      steps {
        sh "echo NO TESTS AVAILABLE YET" // "npm run test"
      }
    }

    // Build Container Image using the artifacts produced in previous stages
    stage('Build Container Image'){
      steps {
        sh """
        mkdir -p oc-build
        cp package.json oc-build/
        cp app.js oc-build/
        cp -fr src oc-build/
        cp -fr node_modules oc-build/
        """

        // Build container image using local Openshift cluster
        // Giving all the artifacts to OpenShift Binary Build
        // This places your artifacts into right location inside your S2I image
        // if the S2I image supports it.
        binaryBuild(projectName: env.NAMESPACE, buildConfigName: env.APP_NAME, buildFromPath: 'oc-build')
      }
    }

    stage('Promote from Build to Dev') {
      steps {
        tagImage(sourceImageName: env.APP_NAME, sourceImagePath: env.NAMESPACE, toImagePath: env.DEV, toImageName: 'node-service')
      }
    }

    stage('Verify Deployment to Dev') {
      steps {
        verifyDeployment(projectName: env.DEV, targetApp: 'node-service')
      }
    }
  }
}