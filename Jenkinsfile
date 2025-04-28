pipeline {
    agent any  // This means Jenkins can run this pipeline on any available machine

    stages {
        stage('Checkout') {
            steps {
                // This step will pull the latest code from GitHub
                git url: 'https://github.com/your-username/taskmanagement-project.git', branch: 'main'
            }
        }

        stage('Build Docker Containers') {
            steps {
                // These commands will stop and rebuild the Docker containers
                script {
                    sh 'docker-compose down'          // Stops any running containers
                    sh 'docker-compose up --build -d' // Rebuilds and starts the containers in detached mode
                }
            }
        }

        stage('Test') {
            steps {
                // Add any testing steps here (if needed)
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here (if needed)
                echo 'Deploying app...'
            }
        }
    }

    post {
        always {
            // This block will run after the pipeline finishes, regardless of success or failure
            echo 'Pipeline completed!'
        }
    }
}
