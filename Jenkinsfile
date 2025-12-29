pipeline {
    agent { label 'nginx' }

    stages {
        stage('Deploy Backend') {
            steps {
                sh '''
                cd /var/www/backend
                git pull origin main
                npm install --production
                pm2 restart backend-api
                '''
            }
        }
    }
}
