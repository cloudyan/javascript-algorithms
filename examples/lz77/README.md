# 数据压缩 lz77 算法

原理及实现

LZ77算法是采用字典做数据压缩的算法，由以色列的两位大神Jacob Ziv与Abraham Lempel在1977年发表的论文《A Universal Algorithm for Sequential Data Compression》中提出。

基于统计的数据压缩编码，比如Huffman编码，需要得到先验知识——信源的字符频率，然后进行压缩。但是在大多数情况下，这种先验知识是很难预先获得。因此，设计一种更为通用的数据压缩编码显得尤为重要。LZ77数据压缩算法应运而生，其核心思想：利用数据的**重复结构信息**来进行数据压缩。

如何描述重复结构信息，LZ77算法给出了更为确切的数学解释。首先，定义字符串S的长度为N，字符串S的子串Si,j, 1≤i,j≤N。对于前缀子串S1,j，记Lji为首字符Si的子串与首字符Sj+1的子串最大匹配的长度，即：

```
L_i^j = \max \{ l | S_{i,i+l-1} = S_{j+1,j+l} \} \quad \text{subject to} \quad l \le N-j
```

我们称字符串Sj+1,j+l匹配了字符串Si,i+l−1，且匹配长度为l。如图所示，存在两类情况：

参考资料:

- http://www.cnblogs.com/en-heng/p/4992916.html
- https://www.jb51.net/article/23024.htm
- https://www.jb51.net/article/120912.htm
