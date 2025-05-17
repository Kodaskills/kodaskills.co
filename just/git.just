# Clean all local branches already merged in main
[group('Git helpers')]
git-local-clean:
    @git switch main
    @git pull --prune
    @git branch --format '%(refname:short) %(upstream:track)' | awk '$2 ~ /\[(gone|disparue)\]/ { print $1 }' | xargs -r git branch -D
