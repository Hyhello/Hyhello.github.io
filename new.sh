#!/bin/bash

# var 选择新建类型
varType=$1;

function chooseType () {
    echo -e "请选择新建类型：";
    select var in "新建文章" "新建页面";
    do
        case $var in
            "新建文章")
                varType="";
            ;;
            "新建页面")
                varType="page";
            ;;
        esac
        echo -n "您选择的新建类型为：$var，确认请输入Y/y：";
        read confirm;
        if [[ "$confirm" == 'Y' || "$confirm" == "y" ]]
        then
            echo "您已确认，选择新建类型为：$var";
        else
            echo -e "\n---------------------------------------------\n";
            chooseType
        fi;
        break;
    done
}

# 为输入则选择
if [[ "$varType" != "page" ]]
then
    chooseType
else
    echo -e "您选择的新建类型为：新建文章";
fi
echo -e -n "\n请输入文件名：";
read title;
echo -e "\n------------ 新建开始 start -----------\n";
hexo new ${varType} ${title}
echo -e "\n------------ 新建结束 end -----------\n";