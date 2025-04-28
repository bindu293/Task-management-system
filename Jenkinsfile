pipeline {
    agent any
    environment {
        PATH = "${env.PATH};C:\\Windows\\System32"  // Ensure Jenkins can find cmd
    }
    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Checkout') {
            steps {
                git credentialsId: '450afa69-fc6f-427a-b984-3dd6e9ba654d', url: 'https://github.com/bindu293/Task-management-system.git'
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
