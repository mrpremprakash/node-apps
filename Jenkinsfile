pipeline {
    agent any

    environment {
        GIT_REPO_URL = 'https://github.com/mrpremprakash/node-apps.git'
        GIT_BRANCH = 'main'
        TARGET_DIR = '/Users/premprakash/Desktop/projects/node-apps/deploymentWithJenkisfile'
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    // Clone the repository into the specified directory
                    dir("${env.TARGET_DIR}") {
                        git branch: "${env.GIT_BRANCH}", url: "${env.GIT_REPO_URL}"
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Change to the specified directory and install dependencies
                    dir("${env.TARGET_DIR}") {
                        sh 'npm install'
                        sh 'npm start'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
