pipeline {
    agent any
    environment {
        PATH = "${env.PATH};C:\\Program Files\\Docker\\Docker\\resources\\bin"  // Ensure Docker Compose is in PATH
    }
    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm  // Pull the latest code from the repository
            }
        }

        stage('Check Docker Compose Version') {
            steps {
                bat 'docker --version'
                bat 'docker-compose --version'  // Or 'docker compose --version' for v2.x
            }
        }

        stage('Build Docker Containers') {
            steps {
                script {
                    // Stop any running containers and rebuild them
                    bat 'docker compose down --remove-orphans'  // Stops running containers and removes orphans
                    bat 'docker compose up --build -d --timeout 600'  // Build and start containers with longer timeout
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deploy commands here
            }
        }

        stage('Push Changes to Git') {
            steps {
                echo 'Pushing changes back to Git...'
                script {
                    bat 'git add .'
                    bat 'git commit -m "Automated changes from Jenkins"'
                    bat 'git push origin main'  // Adjust the branch name if needed
                }
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                echo 'Pipeline completed!'
            }
        }
    }
}
