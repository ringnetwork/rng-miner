user=lqx
host=stttdev

rootdir=/home/lqx/code/rng-miner/

rsync --exclude ".git" --exclude ".idea" --exclude "node_modules" -aruv --verbose ./ $user@$host:"$rootdir"
