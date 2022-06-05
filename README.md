
# Start up docker for the database
```
cd ~/rootdir
docker-compose up -d
```

# install dependencies
```
yarn install 
or npm install
```

# generate prisma client & migrate
```
npx prisma migrate dev
```

# start server
```
yarn build 
yarn start
```
