# 数据压缩 LZ78算法原理及实现

在提出基于滑动窗口的LZ77算法后，两位大神Jacob Ziv与Abraham Lempel于1978年在发表的论文 [1]中提出了LZ78算法；与LZ77算法不同的是LZ78算法使用动态树状词典维护历史字符串。

参考资料：

- http://www.cnblogs.com/en-heng/p/6283282.html
