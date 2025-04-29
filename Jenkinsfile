pipeline {
    agent any
    environment {
        // Add paths for Docker and Git
        PATH = "${env.PATH};C:\\Program Files\\Git\\bin;C:\\Program Files\\Docker\\Docker\\Resources\\bin;C:\\Windows\\System32"
    }
    stages {

        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" down'
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" up --build -d'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // Insert test commands if needed
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Insert deployment steps if needed
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        // Login to DockerHub
                        bat "\"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker.exe\" login -u %DOCKER_USER% -p %DOCKER_PASS%"

                        // Push images
                        bat "\"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker.exe\" push %DOCKER_USER%/backend:latest"
                        bat "\"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker.exe\" push %DOCKER_USER%/frontend:latest"
                    }
                }
            }
        }

        stage('Post Actions') {
            steps {
                echo 'Pipeline completed successfully!'
            }
        }
    }
}
