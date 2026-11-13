## اجرا با Docker

ساخت Image:
```
docker build -t smart-task-api .
```

اجرای Container:
```
docker run -d -p 3000:3000 smart-task-api
```

بررسی Containerهای در حال اجرا:
```
docker ps
```

دیدن Log:
```
docker logs <container-id>
```
