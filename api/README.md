# API

## endpoints

- register user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"name":"Luke","birthdate":"2000-02-01","email":"luke@skywalker.com","username":"Luke","password":"123qwe123"}' http://localhost:8080/users -v
```

- login user

```sh
curl -X POST -H "Content-Type: application/json" -d '{"username":"Luke","password":"123qwe123"}' http://localhost:8080/users/auth -v
```

-logout user

```sh
curl -X PATCH -H "Content-Type: application/json" -d '{"status":"offline"}' http://localhost:8080/users/ojcfb9ylqi9 -v

```

// TODO
