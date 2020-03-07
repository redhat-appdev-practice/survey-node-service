pipeline {
    agent {
        label "jenkins-slave-mvn"
    }
    stages {
        stage('Build') {
            steps {
        	echo '****** Compilation and Testing of Node Survey Service ******'
        	echo '****** NPM list ******'
        		sh 'npm list'
            }
        }
        stage('Promote to Dev') { 
            steps {
                echo '***** Promoting Node Survey Service *****' 
                sh 'ls target'
                script {
                    openshift.withCluster() {
                        openshift.withProject('app-dev-ci-cd') {
                            	openshift.selector("bc", "survey-service-node").startBuild("--from-dir=deployments")
				                openshift.tag("survey-service-node:latest", "consultant-360-dev/survey-service-node:latest")
                        }
                    }
                }
            }
        }
    }
}
