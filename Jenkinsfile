pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout SCM') {
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
                        echo "Lint finished with errors/warnings. Check logs. Continuing pipeline..."
                    } else {
                        echo "Lint passed successfully."
                    }
                }
            }
        }

        stage('Audit') {
            steps {
                echo 'Running npm audit...'
                script {
                    def auditResult = bat(script: 'npm audit', returnStatus: true)
                    if (auditResult != 0) {
                        echo "Audit finished with vulnerabilities. Check logs. Continuing pipeline..."
                    } else {
                        echo "Audit passed successfully."
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying project...'
                // Replace below with your real deploy commands
                bat 'echo Deployment command goes here'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Check logs for details.'
        }
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check logs for errors.'
        }
    }
}
