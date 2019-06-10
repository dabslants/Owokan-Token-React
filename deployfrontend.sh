npm run build
rsync build/static/* docs/
git add .
git commit -m "Compile assets for GitHub pages"
git push -u origin master
