#!/bin/bash

# 如果存在$1则新建页面，否则新建文章
page=$1;
confirm=N;

# if [[ "$page" == "" ]]
# then
#     echo -n "请输入内容:";
#     read page
#     echo "$page"
# fi

function isInput () {
    if [[ "$confirm" == "y" || "$confirm" == "Y" ]]
    then
        echo "111111";
    else
        echo -n "请重新输入Y/y进行重新选择：";
        read confirm;
        isInput
    fi
}
isInput
# function isInput () {
# 	if [[ "$page" == "" ]]
# 	then
# 		echo -n "请输入版本号:"
# 		read page
# 		isInput
# 	else
# 	    echo "输入版本正确$page";
# 	fi
# }
# isInput