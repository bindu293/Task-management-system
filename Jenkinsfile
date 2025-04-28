pipeline {
    agent any
    environment {
        PATH = "${env.PATH};C:\\Windows\\System32"  // Ensure Jenkins can find cmd
    }
    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm  // This will pull the latest code from the repository
            }
        }

        stage('Build Docker Containers') {
            steps {
                // This checks if cmd is working by running a simple command
                bat 'echo Hello from Jenkins!'  // Modify with actual build commands later
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
                // Add commands for pushing changes to Git if needed
            }
        }

        stage('Declarative: Post Actions') {
            steps {
                echo 'Pipeline completed!'
            }
        }
    }
}
