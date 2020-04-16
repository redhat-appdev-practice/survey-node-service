pipeline {
    agent {
        label "jenkins-slave-npm"
    }
    stages {
        stage('Build') {
            steps {
        	echo '****** Compilation and Testing of Node Survey Service ******'
        	echo '****** NPM list ******'
        	sh 'npm install'
            }
        }
        stage('Promote to Dev') { 
            steps {
                echo '***** Promoting Node Survey Service *****' 
                script {
                    openshift.withCluster() {
                        openshift.withProject('appdev-example-ci-cd') {
                            	openshift.selector("bc", "survey-service-node").startBuild()
				                openshift.tag("survey-service-node:latest", "appdev-example-dev/node-service:latest")
                        }
                    }
                }
            }
        }
    }
}
