Fix issue "There isn’t anything to compare. main and master are entirely different commit histories."
git checkout upstreambranch
git branch master upstreambranch -f    
git checkout master  
git push origin master -f

Note:
If you build dockerfile error, you should check file package-lock.json
rm -rf node_modules package-lock.json

Use:
yarn install 
yarn build
yarn start

Build
docker build -t my-react-app .
Run
docker run -d -p 80:80 my-react-app
