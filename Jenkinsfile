pipeline {
    agent any

    environment {
        NODE_HOME = 'C:\\Program Files\\nodejs' // adjust if your Node.js path is different
        PATH = "${env.NODE_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                bat 'npm ci'
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'node jenkins/test-dist.cjs'
            }
        }

        stage('Lint') {
            steps {
                echo 'Checking code quality with ESLint...'
                script {
                    def lintResult = bat(script: 'npm run lint', returnStatus: true)
                    if (lintResult != 0) {
                        echo "Lint finished with ${lintResult} errors/warnings"
                    }
                }
            }
        }

        stage('Audit') {
            steps {
                echo 'Running npm audit...'
                bat 'npm audit'
                bat 'npm audit fix'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy stage (optional, demo only)...'
                // For demo purposes, just print
                bat 'echo Deploying application...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
