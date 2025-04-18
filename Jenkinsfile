pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the project with Maven...'
                bat '"C:\\Windows\\System32\\cmd.exe" /c mvn clean install'
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat '"C:\\Windows\\System32\\cmd.exe" /c mvn test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat '"C:\\Windows\\System32\\cmd.exe" /c docker build -t task-management-system .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                bat '"C:\\Windows\\System32\\cmd.exe" /c docker run -d -p 9090:9090 task-management-system'
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs.'
        }
    }
}
