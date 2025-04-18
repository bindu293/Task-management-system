pipeline {
    agent any

    environment {
        // Define any environment variables here
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out repository...'
                git 'https://github.com/bindu293/Task-management-system.git'
            }
        }
        
        stage('Test Git') {
            steps {
                echo 'Checking Git version...'
                bat 'git --version'  // Replaced 'sh' with 'bat' for Windows
            }
        }

        stage('Frontend Build') {
            steps {
                echo 'Building Frontend...'
                bat 'npm install && npm run build'  // Example for Frontend build
            }
        }

        stage('Backend Build') {
            steps {
                echo 'Building Backend...'
                bat 'mvn clean install'  // Example for Backend build using Maven
            }
        }

        stage('Test') {
            steps {
                echo 'Running Tests...'
                bat 'npm test'  // Replace with your specific test command
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Example deploy command, replace with actual deployment steps
                bat 'deploy-scripts/deploy.bat'
            }
        }
    }

    post {
        always {
            echo 'This will run after all stages, regardless of success or failure.'
        }
        success {
            echo 'Build was successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
