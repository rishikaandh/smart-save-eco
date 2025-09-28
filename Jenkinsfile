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
                // Use npx so Windows Jenkins can find vite
                bat 'npx vite build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Use npx to run any node module scripts
                bat 'npx node jenkins/test-dist.cjs'
            }
        }

        stage('Lint') {
            steps {
                echo 'Checking code quality with ESLint...'
                // Use npx to run ESLint
                bat 'npx eslint . || exit 0' // continue even if lint warnings/errors exist
            }
        }

        stage('Audit') {
            steps {
                echo 'Running npm audit...'
                bat 'npm audit || exit 0' // continue even if vulnerabilities exist
            }
        }

        stage('Deploy') {
            when {
                expression { currentBuild.currentResult == 'SUCCESS' }
            }
            steps {
                echo 'Deploying application...'
                // Add your deploy commands here
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Check logs for details.'
        }
        failure {
            echo 'Pipeline failed. Check logs for errors.'
        }
    }
}
