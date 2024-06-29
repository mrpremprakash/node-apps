pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Pull code from GitHub repository
                git url: 'https://github.com/mrpremprakash/node-apps.git', branch: 'main'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install Node.js dependencies
                sh 'npm install'
            }
        }
        stage('Start') {
            steps {
                // Run the build script
                sh 'npm start'
            }
        }
        // stage('Test') {
        //     steps {
        //         // Run tests
        //         sh 'npm test'
        //     }
        // }
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
