pipeline {
    agent { label 'nginx' }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd /var/www/backend
                npm install
                '''
            }
        }

        stage('Restart Backend with PM2') {
            steps {
                sh '''
                cd /var/www/backend
                pm2 restart backend || pm2 start app.js --name backend
                pm2 save
                '''
            }
        }
    }
}
