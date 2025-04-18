pipeline {
    agent any
    environment {
        IMAGE_NAME = 'task-management-system'
        CONTAINER_NAME = 'task-management-container'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out the code...'
                git 'https://github.com/bindu293/Task-management-system.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project with Maven...'
                // Run Maven to build the app (creates the .jar file)
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Run Maven tests
                sh 'mvn test'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                // Build Docker image using the Dockerfile in the root directory
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                // Stop and remove any existing container if running
                sh 'docker stop $CONTAINER_NAME || true'
                sh 'docker rm $CONTAINER_NAME || true'
                // Run the app in Docker container
                sh 'docker run -d -p 9090:9090 --name $CONTAINER_NAME $IMAGE_NAME'
            }
        }
    }

    post {
        success {
            echo 'App deployed successfully on Docker 🎉'
            echo 'Visit http://localhost:9090'
        }
        failure {
            echo 'Pipeline failed 😞'
        }
    }
}
