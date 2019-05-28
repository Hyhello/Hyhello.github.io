---
title: Array.from
copyright: true
date: 2018-09-07 09:22:04
tags: js
categories: JS相关
keywords: JS相关
---
----

# from属性介绍

## 前沿

Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。那么什么是类数组对象呢？所谓类数组对象，最基本的要求就是具有length属性的对象。

<!--more-->
## 例子

对象转数组：[**点击跳转至demo**](/assets/example/from/demo1.html)
字符串转数组：[**点击跳转至demo**](/assets/example/from/demo2.html)

## 扩展

结合Array.from 进行去重

``` set
    Array.from(new set([1, 2, 1, 3]));
```
数组去重：[**点击跳转至demo**](/assets/example/from/demo3.html)

## 总结

由此可见，要将一个类数组对象转换为一个真正的数组，必须具备以下条件：

1. 该类数组对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。

2. 该类数组对象的属性名必须为数值型或字符串型的数字

**ps: 该类数组对象的属性名可以加引号，也可以不加引号**