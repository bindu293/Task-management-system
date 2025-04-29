pipeline {
    agent any
    environment {
        PATH = "${env.PATH};C:\\Program Files\\Git\\bin;C:\\Program Files\\Docker\\Docker\\Resources\\bin;C:\\Windows\\System32"
    }
    stages {

 

        stage('Build Docker Images') {
            steps {
                script {
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" down'
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                // Add bat/mvn/npm commands here if needed
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" up -d'
            }
        }

        stage('Push Docker Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    script {
                        // Login to DockerHub
                        bat "\"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker.exe\" login -u %DOCKER_USER% -p %DOCKER_PASS%"

                        // Push images to DockerHub (use the same tags as in docker-compose.yml)
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
