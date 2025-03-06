# LinkBench

> https://dl.acm.org/doi/pdf/10.1145/2463676.2465296

## 设计依据：Facebook的真实场景
数据: schema、属性的分布、数据分布

query & operation mix：
- query类型
- 读写比例：
    - 2.19:1 read:write
    - 3.19:1 association queries:association range query
    - Actually 40.8 rows read per row written


## Benchmark设计

- 4.1 Graph Store Implementation: Persistent storage with ACID guaranteed 
- 4.2 Client design: no state tracked in the benchmark client
- 4.3&4.4 Graph Generator: a framework for probability distributions and permutation functions.
- 4.5 Workload Generator: node selection, operation mix, 
- 4.6 Metrics: CPU, Read/Write IOPS, Read/Write MB/s, Memory Size