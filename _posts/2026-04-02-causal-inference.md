---
title: "Statistics for ML #99 — Causal Inference: DAGs, Do-Calculus"
date: 2026-04-02
permalink: /posts/2026/04/causal-inference/
tags: [time-series, survival-analysis, causal-inference, experimentation]
---

## Causal Inference: DAGs, Do-Calculus

Post **#99/100** in the *Statistics for ML* series — [Md Salek Miah](/) | Statistician & ML Researcher | SUST, Bangladesh.

**Causal Inference** moves beyond correlation to answer: "Does X *cause* Y?" This is the central question in public health policy.

### DAGs (Directed Acyclic Graphs)

A DAG encodes causal assumptions. Arrows represent direct causal effects. Used to identify confounders, mediators, and colliders.

**Tools:** Dagitty (web-based), `dagitty` R package — used in our DHS research for confounder selection.

### Do-Calculus (Pearl's Framework)
$$P(Y | do(X=x)) \neq P(Y | X=x)$$

The do-operator represents *intervening* to set X, vs *observing* X.

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| Confounder | Causes both X and Y | Wealth → ANC visits AND delivery location |
| Mediator | On causal path X→M→Y | ANC → knowledge → SBA |
| Collider | Caused by both X and Y | Conditioning on collider opens non-causal path |

```r
library(dagitty)
library(ggdag)

# DAG for SBA research
dag <- dagitty('dag {
  Wealth -> ANC_visits
  Wealth -> SBA
  ANC_visits -> SBA
  Education -> Wealth
  Education -> SBA
  Rural -> ANC_visits
  Rural -> SBA
}')

# Find minimal adjustment set for ANC -> SBA
adjustmentSets(dag, exposure="ANC_visits", outcome="SBA")
ggdag(dag, layout="circle") + theme_dag()
```

---
*[Series Index](/posts/2026/01/statistics-ml-index/) | Post #99/100 | [Md Salek Miah](/) | [saleksta@gmail.com](mailto:saleksta@gmail.com)*
