# OLAP类论文

- [Morsel-driven parallelism](./morsel_driven_paral.md)


# OLAP类技术博客

## Execution Engine设计

TiDB提供了很多不错的设计介绍:
- [如何设计Plan的执行引擎](https://pingcap.github.io/tidb-dev-guide/understand-tidb/execution.html): 火山模型、向量化执行
的Idea、chunk的设计
- [向量化执行](https://pingcap.github.io/tidb-dev-guide/understand-tidb/implementation-of-vectorized-execution.html): 基于apache arrow定义的chunk来实现列式内存表示，然后进行向量化计算，由于减少了内存访问和解释执行的开销，因此性能有所提
  升。文中给了一个例子。
- [并行执行框架](https://pingcap.github.io/tidb-dev-guide/understand-tidb/parallel-execution-framework.html): TODO
- [Pipeline执行框架](https://docs.pingcap.com/tidb/stable/tiflash-pipeline-model/): 找到pipeline breaker operator然后拆分为pipeline，然后并行执行
- [TiFlash执行器线程模型](https://fuzhe1989.github.io/2022/04/17/tiflash-executor-thread-model/):

## 并行化执行

- [DuckDB Push-Based Execution](https://dsdsd.da.cwi.nl/slides/dsdsd-duckdb-push-based-execution.pdf)
    - Pipeline并行？

## AP场景下的事务

### DuckDB为何支持事务

[Changing Data with Confidence and ACID](https://duckdb.org/2024/09/25/changing-data-with-confidence-and-acid.html)

**TL;DR**: 尽管OLAP系统作为none system of record，但change in datasets is inevitable.
- Concurrent Ingestion and Reporting. e.g. multiple connection
- Rolling Back Incorrect Transformations, e.g. deleting wrong data
- 尽管可以re-import data，但事务的支持可以节省时间
- 事务可以支持SQL assertion

DuckDB passed all tests in TPC-H including the ACID. 

### DuckDB的事务设计

[Analytics-Optimized Concurrent Transactions](https://duckdb.org/2024/10/30/analytics-optimized-concurrent-transactions.html)
- key design: version加在bulk version粒度上, e.g. 2048 rows

[DuckDB MVCC的设计](https://tangdh.life/posts/database/duckdb-mvcc/): TODO