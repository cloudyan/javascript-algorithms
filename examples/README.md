# 算法练习

- 阶乘函数 [factorial]
- 斐波那契数列 [fibonacci]
- 全局唯一标识符
  - [uuid]
  - [guid]
  - Twitter的雪花算法 [snowflake]
- LZ系列压缩算法
  - LZ系列压缩算法均为LZ77与LZ78的变种，在此基础上做了优化。
  - LZ77：LZSS、LZR、LZB、LZH；
  - LZ78：LZW、LZC、LZT、LZMW、LZJ、LZFG。
  - 其中，LZSS与LZW为这两大阵容里名气最响亮的算法。LZSS是由Storer与Szymanski [2]改进了LZ77：增加最小匹配长度的限制，当最长匹配的长度小于该限制时，则不压缩输出，但仍然滑动窗口右移一个字符。Google开源的Snappy压缩算法库大体遵循LZSS的编码方案，在其基础上做了一些工程上的优化。
- LRU
- 判断回文数
- 最长回文子串 https://www.cnblogs.com/en-heng/p/3973679.html
- 去掉重复值(数组)
- 找出字符串中出现次数最多的字母
- 求最大值、最小值
- 验证是否为数组

迷宫生成算法 https://zhuanlan.zhihu.com/p/47395955
https://bost.ocks.org/mike/algorithms/#maze-generation
https://github.com/luobotang/maze
https://bost.ocks.org/mike/

Java程序员3面小米，被俩算法题难倒，微软员工6分钟解决，真丢脸
https://zhuanlan.zhihu.com/p/38850888


为什么算法这么难？ https://zhuanlan.zhihu.com/p/25101438

FreeCodeCamp 高级算法题 - 字符串排列 https://zhuanlan.zhihu.com/p/30567628
https://zhuanlan.zhihu.com/p/27659059

Node.js大众点评爬虫 https://www.cnblogs.com/en-heng/p/5895207.html

- lz77 算法
  - https://www.jb51.net/article/23024.htm
  - https://www.jb51.net/article/120912.htm

- 随机算法 random
  - uuid
  - 随机洗牌 knuth-shuffle
    -  http://caibaojian.com/js-random-array.html
    -  https://www.h5jun.com/post/array-shuffle.html
    -  http://caibaojian.com/get-random-element.html
  - 5分钟现场撸代码——谈总结会抽奖程序 https://www.h5jun.com/post/luckey-draw-in-5-minutes.html

- Twitter的雪花算法 snowflake

重学前端 https://www.w3cplus.com/relearn-the-front-end-techniques.html

排序算法

第三届360前端星计划在线作业题
https://www.h5jun.com/post/75team-star-handlock.html

用65行代码实现JavaScript动画序列播放
https://www.h5jun.com/post/sixty-lines-of-code-animation.html

为什么 [ ] 是 false 而 !![ ] 是 true
https://www.h5jun.com/post/why-false-why-true.html

https://www.cnblogs.com/en-heng/category/582209.html
【十大经典数据挖掘算法】SVM系列 https://www.cnblogs.com/en-heng/p/5965438.html

别人家的面试题：不可变数组快速范围求和 https://75team.com/post/range-sum-query-immutable.html
别人家的面试题：自然数拆分求最大乘积 https://75team.com/post/integer-break.html

别人家的面试题：统计“1”的个数（续） https://75team.com/post/count_bits.html

https://www.h5jun.com/post/html5-element-flowchart.html
HTML5 元素选择流程图

https://www.h5jun.com/post/multiply7.html 别人家的面试题：不用加减乘除，求整数的7倍

C4.5
K-Means
SVM
Apriori
EM
PageRank
AdaBoost
kNN
Naïve Bayes
CART
