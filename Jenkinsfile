pipeline {
    agent any

    environment {
        DUMMY_VAR = "value" // You can change or remove this later
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                // Example: sh 'mvn clean install'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                // Example: sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application..."
                // Example: sh 'scp target/*.jar user@host:/deploy/location'
            }
        }
    }
}
