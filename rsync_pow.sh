user=lqx
host=stttpow

rootdir=/home/lqx/code/rng-miner

rsync --exclude ".git" --exclude ".idea" -aruv --verbose ./ $user@$host:"$rootdir"

