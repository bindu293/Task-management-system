pipeline {
    agent any
    environment {
        // Ensuring paths for necessary tools (Git, Docker) are available to Jenkins
        PATH = "${env.PATH};C:\\Program Files\\Git\\bin;C:\\Program Files\\Docker\\Docker\\Resources\\bin;C:\\Windows\\System32"
    }
    stages {
        stage('Declarative: Checkout SCM') {
            steps {
                checkout scm  // Pull the latest code from the repository
            }
        }

        stage('Build Docker Containers') {
            steps {
                script {
                    // Stop any running containers and rebuild them
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" down'  // Stops running containers
                    bat '"C:\\Program Files\\Docker\\Docker\\Resources\\bin\\docker-compose.exe" up --build -d'  // Builds and starts containers in detached mode
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
                // For example, if you have a test script, you could run:
                // bat 'npm test'  // For Node.js tests (if using a JavaScript stack)
                // bat 'mvn test'  // For Java Maven tests
                // bat 'pytest'  // For Python tests
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'
                // Add your deploy commands here
                // For example, you could:
                // bat 'docker-compose exec <container_name> ./deploy.sh'  // Run deployment script inside container
                // Or run other deploy commands based on your stack
            }
        }

        stage('Push Changes to Git') {
            steps {
                echo 'Pushing changes back to Git...'
                script {
                    // You can push back changes to your repository if needed
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" add .'
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" commit -m "Automated changes from Jenkins"'
                    bat '"C:\\Program Files\\Git\\bin\\git.exe" push origin main'  // Adjust the branch name if needed
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
