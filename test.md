



```sequence
pippo1->pluto: GET /users/{ID}
pluto->Service: .getUser()
Service->Repository: getById(ID)
Repository-->Service: Query response
Service-->pluto: List<> 
pluto-->pippo1: JSON: with response \nor errore code
```

- ​

  ​

