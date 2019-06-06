# CSRDKA
UI for the Performance Workflow Manager (PWM)

## Deployment

#### Local Webpack build and Run Server
Making changes and developing is a key component to web development.

To build and run this app:
```
npm install --silent
npm run buildDev
npm run start
```

#### Docker - Build and Run Manually
1. `docker build -t svc-cypress:latest .`
2. `docker run -p 5555:5555 svc-cypress:latest`

#### Docker Compose
Docker compose allows you to spin up and start the service locally.

To do this run: `docker-compose up`

#### Running on (local) MiniKubes
Minikubes is a local cluster to deploy the application using Kubernetes.

Assuming you have [MiniKubes](https://kubernetes.io/docs/tutorials/hello-minikube/) downloaded and Kubectl.
If not use brew install for each.

These are the commands to run MiniKubes and get the app running:

1. First be sure you do not have another cluster created or running **IMPORTANT - this will delete your running minikube config** (Mac only)
   `rm -rf ~/.minikube`
2. Run Minikube
   `minikube delete && minikube start`
3. Switch docker daemon to create on minikube
   `eval $(minikube docker-env)`
4. Open dashboard to verify minikube is running correctly
   `minikube dashboard`
   `Ctrl+C` to end dashboard
5. Build cypress image on minikube
   `docker build -t svc-cypress:latest .`
6. Create service
   `kubectl apply -f cypress-svc.yaml`
7. Create deployment
   `kubectl create -f cypress-deployment.yaml`
8. Verify there are no failures in your dashboard
   `minikube dashboard`
   `Ctrl+C` to end dashboard
   - If there are failures with docker login - be sure to login to your local docker in the terminal. `docker login`
9. Load service in browser
   `minikube service deploy-react-kubernetes-service`

## Testing
The current tests available are Jest and eslint.

To run tests:
`npm run test`


