Object.assign(window.search, {"doc_urls":["how_to_read.html#关于本博客about-this-blog","how_to_read.html#如何读技术博客","how_to_read.html#如何读论文","benchmarks/index.html#benchmark","benchmarks/snb-interactive.html#snb-interactive","benchmarks/snb-bi.html#snb-bi","benchmarks/linkbench.html#linkbench","benchmarks/linkbench.html#facebook的真实场景","benchmarks/linkbench.html#benchmark设计","graph/index.html#graph","graph/graph-database.html#graph-database","graph/graph-processing.html#graph-processing","olap/index.html#olap类论文","olap/index.html#olap类技术博客","olap/index.html#execution-engine设计","olap/index.html#并行化执行","olap/index.html#ap场景下的事务","olap/index.html#duckdb为何支持事务","olap/index.html#duckdb的事务设计","olap/morsel_driven_paral.html#morsel-driven-parallelism"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":1,"title":1},"1":{"body":0,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":5,"title":2},"11":{"body":0,"breadcrumbs":5,"title":2},"12":{"body":3,"breadcrumbs":2,"title":1},"13":{"body":0,"breadcrumbs":2,"title":1},"14":{"body":11,"breadcrumbs":3,"title":2},"15":{"body":5,"breadcrumbs":1,"title":0},"16":{"body":0,"breadcrumbs":2,"title":1},"17":{"body":36,"breadcrumbs":2,"title":1},"18":{"body":14,"breadcrumbs":2,"title":1},"19":{"body":1,"breadcrumbs":7,"title":3},"2":{"body":2,"breadcrumbs":0,"title":0},"3":{"body":2,"breadcrumbs":2,"title":1},"4":{"body":0,"breadcrumbs":5,"title":2},"5":{"body":0,"breadcrumbs":5,"title":2},"6":{"body":1,"breadcrumbs":3,"title":1},"7":{"body":19,"breadcrumbs":3,"title":1},"8":{"body":0,"breadcrumbs":3,"title":1},"9":{"body":0,"breadcrumbs":2,"title":1}},"docs":{"0":{"body":"在阅读学习的过程中提炼关键的信息，记录到此，期望量变带来质变。","breadcrumbs":"如何读论文 » 关于本博客/About this blog","id":"0","title":"关于本博客/About this blog"},"1":{"body":"辨别博客的质量","breadcrumbs":"如何读论文 » 如何读技术博客","id":"1","title":"如何读技术博客"},"10":{"body":"","breadcrumbs":"Graph » Graph Database » Graph Database","id":"10","title":"Graph Database"},"11":{"body":"","breadcrumbs":"Graph » Graph Processing » Graph Processing","id":"11","title":"Graph Processing"},"12":{"body":"Morsel-driven parallelism","breadcrumbs":"OLAP » OLAP类论文","id":"12","title":"OLAP类论文"},"13":{"body":"","breadcrumbs":"OLAP » OLAP类技术博客","id":"13","title":"OLAP类技术博客"},"14":{"body":"TiDB提供了很多不错的设计介绍: 如何设计Plan的执行引擎 : 火山模型、向量化执行 的Idea、chunk的设计 向量化执行 : 基于apache arrow定义的chunk来实现列式内存表示，然后进行向量化计算，由于减少了内存访问和解释执行的开销，因此性能有所提 升。文中给了一个例子。 并行执行框架 : TODO Pipeline执行框架 : 找到pipeline breaker operator然后拆分为pipeline，然后并行执行 TiFlash执行器线程模型 :","breadcrumbs":"OLAP » Execution Engine设计","id":"14","title":"Execution Engine设计"},"15":{"body":"DuckDB Push-Based Execution Pipeline并行？","breadcrumbs":"OLAP » 并行化执行","id":"15","title":"并行化执行"},"16":{"body":"","breadcrumbs":"OLAP » AP场景下的事务","id":"16","title":"AP场景下的事务"},"17":{"body":"Changing Data with Confidence and ACID TL;DR : 尽管OLAP系统作为none system of record，但change in datasets is inevitable. Concurrent Ingestion and Reporting. e.g. multiple connection Rolling Back Incorrect Transformations, e.g. deleting wrong data 尽管可以re-import data，但事务的支持可以节省时间 事务可以支持SQL assertion DuckDB passed all tests in TPC-H including the ACID.","breadcrumbs":"OLAP » DuckDB为何支持事务","id":"17","title":"DuckDB为何支持事务"},"18":{"body":"Analytics-Optimized Concurrent Transactions key design: version加在bulk version粒度上, e.g. 2048 rows DuckDB MVCC的设计 : TODO","breadcrumbs":"OLAP » DuckDB的事务设计","id":"18","title":"DuckDB的事务设计"},"19":{"body":"https://dl.acm.org/doi/10.1145/2588555.2610507","breadcrumbs":"OLAP » Morsel-driven parallelism » Morsel-driven parallelism","id":"19","title":"Morsel-driven parallelism"},"2":{"body":"传统的读论文技巧 快速了解一个领域/方向：Survey 粗读浅读的方法：读摘要、结论 如果你能读懂论文中的图和公式，那基本上论文的主体内容你就清楚了 大模型时代的技巧 让大模型给你提供更多信息，但注意大模型训练数据的滞后性 可以发论文给大模型，让AI帮你总结","breadcrumbs":"如何读论文 » 如何读论文","id":"2","title":"如何读论文"},"3":{"body":"这是Benchmark的Sub-Directory","breadcrumbs":"Benchmark » Benchmark","id":"3","title":"Benchmark"},"4":{"body":"","breadcrumbs":"Benchmark » SNB Interactive » SNB Interactive","id":"4","title":"SNB Interactive"},"5":{"body":"","breadcrumbs":"Benchmark » SNB BI » SNB BI","id":"5","title":"SNB BI"},"6":{"body":"https://dl.acm.org/doi/pdf/10.1145/2463676.2465296","breadcrumbs":"Benchmark » LinkBench » LinkBench","id":"6","title":"LinkBench"},"7":{"body":"数据: schema、属性的分布、数据分布 query & operation mix： query类型 读写比例： 2.19:1 read:write 3.19:1 association queries:association range query Actually 40.8 rows read per row written","breadcrumbs":"Benchmark » LinkBench » Facebook的真实场景","id":"7","title":"Facebook的真实场景"},"8":{"body":"","breadcrumbs":"Benchmark » LinkBench » Benchmark设计","id":"8","title":"Benchmark设计"},"9":{"body":"","breadcrumbs":"Graph » Graph","id":"9","title":"Graph"}},"length":20,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"2":{".":{"1":{"9":{":":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"4":{"8":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{".":{"1":{"9":{":":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"0":{".":{"8":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}},"p":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"16":{"tf":1.0}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"定":{"df":0,"docs":{},"义":{"df":0,"docs":{},"的":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":1,"docs":{"5":{"tf":1.0}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":2,"docs":{"17":{"tf":1.0},"18":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"17":{"tf":1.7320508075688772}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"k":{"d":{"b":{"df":3,"docs":{"15":{"tf":1.0},"17":{"tf":1.4142135623730951},"18":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":2,"docs":{"17":{"tf":1.4142135623730951},"18":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"14":{"tf":1.0},"15":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}},"h":{"df":1,"docs":{"17":{"tf":1.0}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"l":{".":{"a":{"c":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"/":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"/":{"1":{"0":{".":{"1":{"1":{"4":{"5":{"/":{"2":{"5":{"8":{"8":{"5":{"5":{"5":{".":{"2":{"6":{"1":{"0":{"5":{"0":{"7":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"d":{"df":0,"docs":{},"f":{"/":{"1":{"0":{".":{"1":{"1":{"4":{"5":{"/":{"2":{"4":{"6":{"3":{"6":{"7":{"6":{".":{"2":{"4":{"6":{"5":{"2":{"9":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"、":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"18":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.0}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"v":{"c":{"c":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"p":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"作":{"df":0,"docs":{},"为":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"然":{"df":0,"docs":{},"后":{"df":0,"docs":{},"拆":{"df":0,"docs":{},"分":{"df":0,"docs":{},"为":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"18":{"tf":1.0}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.0}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"s":{":":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"d":{":":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"，":{"df":0,"docs":{},"但":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":1,"docs":{"17":{"tf":1.0}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}},"w":{"df":2,"docs":{"18":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"n":{"b":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"i":{"d":{"b":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}}},"l":{";":{"d":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"o":{"df":2,"docs":{"14":{"tf":1.0},"18":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}},"加":{"df":0,"docs":{},"在":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"2":{".":{"1":{"9":{":":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"0":{"4":{"8":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"3":{".":{"1":{"9":{":":{"1":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"4":{"0":{".":{"8":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}},"n":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}},"p":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}},"df":1,"docs":{"16":{"tf":1.4142135623730951}}},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"定":{"df":0,"docs":{},"义":{"df":0,"docs":{},"的":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"df":0,"docs":{}}}}}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"15":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":6,"docs":{"3":{"tf":1.7320508075688772},"4":{"tf":1.0},"5":{"tf":1.0},"6":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.7320508075688772}},"的":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":1,"docs":{"5":{"tf":1.7320508075688772}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":2,"docs":{"17":{"tf":1.0},"18":{"tf":1.0}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":1,"docs":{"17":{"tf":1.7320508075688772}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}}}}}}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.7320508075688772}}}}}}},"u":{"c":{"df":0,"docs":{},"k":{"d":{"b":{"df":3,"docs":{"15":{"tf":1.0},"17":{"tf":1.7320508075688772},"18":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":2,"docs":{"17":{"tf":1.4142135623730951},"18":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.4142135623730951}}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":2.0},"11":{"tf":2.0},"9":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}},"h":{"df":1,"docs":{"17":{"tf":1.0}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"d":{"df":0,"docs":{},"l":{".":{"a":{"c":{"df":0,"docs":{},"m":{".":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"g":{"/":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"/":{"1":{"0":{".":{"1":{"1":{"4":{"5":{"/":{"2":{"5":{"8":{"8":{"5":{"5":{"5":{".":{"2":{"6":{"1":{"0":{"5":{"0":{"7":{"df":1,"docs":{"19":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"d":{"df":0,"docs":{},"f":{"/":{"1":{"0":{".":{"1":{"1":{"4":{"5":{"/":{"2":{"4":{"6":{"3":{"6":{"7":{"6":{".":{"2":{"4":{"6":{"5":{"2":{"9":{"6":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"、":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"14":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"n":{"c":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"d":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"18":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":3,"docs":{"6":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"7":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.7320508075688772}}}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"v":{"c":{"c":{"df":1,"docs":{"18":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"p":{"df":8,"docs":{"12":{"tf":1.7320508075688772},"13":{"tf":1.7320508075688772},"14":{"tf":1.0},"15":{"tf":1.0},"16":{"tf":1.0},"17":{"tf":1.0},"18":{"tf":1.0},"19":{"tf":1.0}},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"作":{"df":0,"docs":{},"为":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"然":{"df":0,"docs":{},"后":{"df":0,"docs":{},"拆":{"df":0,"docs":{},"分":{"df":0,"docs":{},"为":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}}}}}}}}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"18":{"tf":1.0}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":2,"docs":{"12":{"tf":1.0},"19":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"7":{"tf":1.0}}}},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":2,"docs":{"14":{"tf":1.4142135623730951},"15":{"tf":1.0}}}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"15":{"tf":1.0}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.7320508075688772}},"e":{"df":0,"docs":{},"s":{":":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"7":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"7":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"d":{":":{"df":0,"docs":{},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"d":{"df":0,"docs":{},"，":{"df":0,"docs":{},"但":{"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}},"df":1,"docs":{"17":{"tf":1.0}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}},"w":{"df":2,"docs":{"18":{"tf":1.0},"7":{"tf":1.4142135623730951}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"a":{"df":1,"docs":{"7":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"n":{"b":{"df":2,"docs":{"4":{"tf":1.7320508075688772},"5":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"q":{"df":0,"docs":{},"l":{"df":1,"docs":{"17":{"tf":1.0}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"y":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"y":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"17":{"tf":1.0}}}}},"i":{"d":{"b":{"df":1,"docs":{"14":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}}},"l":{";":{"d":{"df":0,"docs":{},"r":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":0,"docs":{},"o":{"df":2,"docs":{"14":{"tf":1.0},"18":{"tf":1.0}}}},"df":0,"docs":{}},"p":{"c":{"df":1,"docs":{"17":{"tf":1.0}}},"df":0,"docs":{}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"18":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"f":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"18":{"tf":1.0}},"加":{"df":0,"docs":{},"在":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"18":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}},"w":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"7":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"17":{"tf":1.0}}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"p":{"df":1,"docs":{"16":{"tf":1.0}}}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":2,"docs":{"3":{"tf":1.0},"8":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"i":{"df":1,"docs":{"5":{"tf":1.0}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"b":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"10":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"19":{"tf":1.0}}}}}}},"u":{"c":{"df":0,"docs":{},"k":{"d":{"b":{"df":2,"docs":{"17":{"tf":1.0},"18":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"14":{"tf":1.0}}}}}},"x":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"14":{"tf":1.0}}}}},"df":0,"docs":{}}}},"f":{"a":{"c":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"7":{"tf":1.0}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":3,"docs":{"10":{"tf":1.0},"11":{"tf":1.0},"9":{"tf":1.0}}}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"6":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}}}}},"o":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"p":{"df":2,"docs":{"12":{"tf":1.0},"13":{"tf":1.0}}}},"df":0,"docs":{}}},"p":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":1,"docs":{"19":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"11":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"n":{"b":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"df":0,"docs":{}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});