echo "usage: bash d.sh bilibiliurl(before play/) beginint endint"
for ((i=$2;i<${3}+1;i++)) ;
do
	you-get ${1}ep$i
done
