pipeline {
    agent { label 'nginx' }

    stages {
        stage('Deploy Backend') {
            steps {
                sh '''
                cd /var/www/backend
                npm install --production
                pm2 restart backend-api
                pm2 save
                '''
            }
        }
    }
}
