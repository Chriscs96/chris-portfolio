#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Initialize a new repo
git init
git remote add origin https://github.com/Chriscs96/chris-portfolio.git


# custom domain
echo 'christophercs.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# Rename or create main branch
git branch -M main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f origin main:gh-pages

cd -