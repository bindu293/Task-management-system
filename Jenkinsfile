pipeline {
    agent any

    environment {
        // Add Git executable path to the PATH environment variable
        PATH = "/mingw64/bin:${env.PATH}"
    }

    stages {
        // Stage to check if Git is working correctly
        stage('Test Git') {
            steps {
                echo 'Checking Git version...'
                // This will run the git version command to verify Git is installed
                sh 'git --version'
            }
        }

        // Stage to checkout code from Git
        stage('Checkout') {
            steps {
                echo 'Cloning the Git repository...'
                checkout scm  // Jenkins automatically checks out the code from the repository
            }
        }

        // Frontend build stage (if applicable)
        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    echo 'Running frontend build...'
                    // For example, npm build or any frontend-related commands
                    sh 'npm install' // Use your specific build commands
                }
            }
        }

        // Backend build stage (if applicable)
        stage('Backend Build') {
            steps {
                dir('backend') {
                    echo 'Running backend build...'
                    // Run backend build commands (for example, mvn clean install for Maven projects)
                    sh './mvnw clean install' // Or use your specific backend commands
                }
            }
        }

        // Test stage (if applicable)
        stage('Test') {
            steps {
                echo 'Running tests...'
                // For example, run your unit tests or integration tests here
                sh './mvnw test' // Or your specific test command
            }
        }

        // Deployment stage (if applicable)
        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deployment commands (e.g., pushing to a server, Docker, etc.)
                // Example: sh './deploy.sh'
            }
        }

    }

    post {
        always {
            echo 'This will run after all stages (whether success or failure)'
        }
        success {
            echo 'Build successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
