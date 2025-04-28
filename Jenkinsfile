pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/bindu293/Task-management-system.git', branch: 'main'
            }
        }

        stage('Build Docker Containers') {
            steps {
                script {
                    bat 'docker-compose down'
                    bat 'docker-compose up --build -d'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying app...'
            }
        }

        stage('Push Changes to Git') {
            steps {
                script {
                    bat 'git config --global user.email "gorlebindusree@gmail.com"'
                    bat 'git config --global user.name "bindu293"'

                    bat 'git add .'
                    bat 'git commit -m "Automated commit from Jenkins pipeline" || echo "No changes to commit"'

                    withCredentials([usernamePassword(credentialsId: 'GitHub-Token', usernameVariable: 'USERNAME', passwordVariable: 'TOKEN')]) {
                        bat 'git push https://%USERNAME%:%TOKEN%@github.com/bindu293/Task-management-system.git main'
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline completed!'
        }
    }
}
