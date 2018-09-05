#!/bin/sh

#/*==========================================================
#* Author        : vitah
#* Mail          : vitahlin@163.com
#* Created       : 2017-08-08 14:42
#* Last modified : 2017-08-08 14:42
#* Filename      : sgp.sh
#* Description   : git规范化提交脚本
#==========================================================*/

myGitType=0
gitDetail=""
repeatInput="Y"

# 提示输入要提交的类型
function setGitType(){
	echo "\nGit提交类型:
1:  Feat     添加新特性
2:  Fix      修复BUG
3:  Docs     修改文档
4:  Style    修改空格、格式缩进等等
5:  Refactor 代码重构，不是新增功能，也不是修改BUG
6:  Perf     增加代码性能测试
7:  Test     增加测试用例
8:  Chore    改变构建流程，或者增加依赖库、工具等
请输入提交类型：\c\n"
	read inputNum
	myGitType=$inputNum
echo "\n"
}

# 验证要输入的类型是否正确
function checkInput(){
while [ $myGitType -lt 1 -o $myGitType -gt 8 ]
do
	echo "\n\033[31m 输入有误，重新输入! \033[0m"
	setGitType
done
}

function setGitDetail(){
case $myGitType in
	1) echo "选择($myGitType) Feat:添加新特性，请输入具体内容:"
		read inputStr
		gitDetail="Feat：$inputStr"
		;;
	2) echo "选择($myGitType) Fix:修复BUG，请输入具体内容:"
		read inputStr
		gitDetail="Fix：$inputStr"
		;;
	3) echo "选择($myGitType) Docs:修改文档，请输入具体内容:"
		read inputStr
		gitDetail="Docs：$inputStr"
		;;
	4) echo "选择($myGitType) Style:修改空格、格式缩进等等，请输入具体内容:"
		read inputStr
		myGitInfo=$inputStr
		gitDetail="Style：$inputStr"
		;;
	5) echo "选择($myGitType) Refactor:代码重构，不是新增功能，也不是修改BUG，请输入具体内容:"
		read inputStr
		gitDetail="Refactor：$inputStr"
		;;
	6) echo "选择($myGitType) Perf:增加代码性能测试，请输入具体内容:"
		read inputStr
		gitDetail="Perf：$inputStr"
		;;
	7) echo "选择($myGitType) Test:增加测试用例，请输入具体内容:"
		read inputStr
		gitDetail="Test：$inputStr"
		;;
	8) echo "选择($myGitType) Chore:改变构建流程，或者增加依赖库、工具等，请输入具体内容:"
		read inputStr
		gitDetail="Chore：$inputStr"
		;;
esac

echo "\n提交内容 [\033[32m $gitDetail \033[0m]，是否重新输入 [Y/N]? \c"
read isRepeat
repeatInput=$isRepeat
}

function checkDetail(){
while [ 1 ]
do
	case $repeatInput in
		Y | y)
			echo "\n\033[31m 请重新输入提交信息! \033[0m\n"
			setGitDetail
			;;
		N | n)
			echo  "\n\033[32m 输入完成，提交中… \033[0m\n"
			break 2
			;;
		*)
			echo "\n\033[31m 请重新输入提交信息! \033[0m\n"
			setGitDetail
			;;
	esac
done
}

# 运行
git status
setGitType
checkInput
setGitDetail
checkDetail

git add .
git commit -m "$gitDetail"
git push -u origin master

echo "\n\033[32m 提交成功! \033[0m\n"