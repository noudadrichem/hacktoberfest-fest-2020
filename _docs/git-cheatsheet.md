# Git cheat sheet.

## Repository aanmaken:
	git init
	git remote add origin [LINK VAN JE REPO]

## Push : 
	git add . 
	(of git add [file name]
	git commit -m "comment" 
	git push origin master
	(origin is hier de remote)
	(master de branch)
	git push [REMOTE] [BRANCH]

## Pull :
  git pull [remote] [branch]
	e.g. git pull origin master
 
## Pushen:  
git add {filename}
git commit -m "comment"
git push [REMOTE] [BRANCH] => git push origin master


### undo last commit 
git reset HEAD~
