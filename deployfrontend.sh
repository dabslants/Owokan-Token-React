#npm run build
#rsync build/* docs/
#rsync build/static/* docs/static/
git add .
git commit -m "Compile assets for GitHub pages"
git push -u origin master
