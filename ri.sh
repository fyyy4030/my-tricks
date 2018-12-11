echo "用法：把文件夹或文件下载到96的home下 本地运行bash ti.sh xxx(文件夹名)"
ssh -p 5102 zihao_wang@183.174.228.96 "tar cf $1.tar $1"
scp -P 5102 zihao_wang@183.174.228.96:$1.tar ./
ssh -p 5102 zihao_wang@183.174.228.96 "rm -f $1.tar"
tar xf $1.tar
rm -f $1.tar

