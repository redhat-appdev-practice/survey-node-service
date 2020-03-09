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
                        openshift.withProject('app-dev-ci-cd') {
                            	openshift.selector("bc", "survey-service-node").startBuild()
				                openshift.tag("survey-service-node:latest", "consultant-360-dev/survey-service-node:latest")
                        }
                    }
                }
            }
        }
    }
}
