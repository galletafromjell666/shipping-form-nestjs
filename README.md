
# shipping-form-nestjs
Backend project used by this other repository [shipping-form-nextjs](https://github.com/galletafromjell666/shipping-form-nextjs).

## Set up with Docker
To simplify the execution of both projects, you can download the provided [docker-compose.yml](https://github.com/galletafromjell666/shipping-form-nestjs/blob/docker-compose/docker-compose.yml) file and place it in a shared folder as illustrated below:
```bash
└── root/
    ├── shipping-form-nextjs/
    │   └── dockerfile
    ├── shipping-form-nestjs/
    │   └── dockerfile
    └── docker-compose.yml
```
Then, simply run the following command:
```bash
docker-compose up
```

The FrontEnd will run on `http://localhost:3010/`

## Standalone Set up
- Clone the repository
- Navigate to the project directory:
```bash 
cd shipping-form-nestjs/
```
- Install the dependencies:
```bash 
npm run install
```

- Start the server
```bash 
npm run start
```
