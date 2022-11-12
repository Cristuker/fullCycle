kubectl cluster-info --context kind-fullcycle
kubectl rollout undo deployment goserver
kubectl get pods
kubectl get deployments
kubectl rollout undo deployment goserver
kubectl describe deployment goserver
kubectl apply -f service.yaml
kubectl get services
kubectl port-forward svc/goserver-service 8000:80
kubectl proxy --port=8080
kind create cluster --config=kind.yaml --name=fullcycle