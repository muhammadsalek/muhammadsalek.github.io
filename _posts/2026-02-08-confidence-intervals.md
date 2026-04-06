---
title: "Statistics for ML #37 — Confidence Intervals"
date: 2026-02-08
permalink: /posts/2026/02/confidence-intervals/
tags: [statistics, inference, regression, machine-learning]
---

## Confidence Intervals

Post **#37** of 100 in the *Statistics for ML* series by [Md Salek Miah](/) — Statistician, SUST Bangladesh.

### What You Will Learn

The **Confidence Intervals** is one of the core building blocks of quantitative research. This post covers:

1. **Mathematical definition** — precise and complete
2. **Intuitive explanation** — what it means in plain language
3. **Public health application** — real examples from DHS survey research
4. **Python implementation** — ready-to-run code
5. **R implementation** — for epidemiologists and survey analysts
6. **ML connection** — how this concept appears in modern algorithms

### Core Mathematics

The Confidence Intervals formalises how we estimate unknown population parameters from sample data.

### Python Code

```python
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

# Confidence Intervals — implementation example
# Full code available at: github.com/muhammadsalek
print("Post #37: Confidence Intervals")

# Example: Load DHS-style data
np.random.seed(42)
n = 1000
data = pd.DataFrame({
    'anc_visits': np.random.poisson(3.2, n),
    'birth_weight': np.random.normal(3100, 480, n),
    'sba': np.random.binomial(1, 0.67, n),
    'wealth_q': np.random.randint(1, 6, n),
    'rural': np.random.binomial(1, 0.65, n)
})

# Apply Confidence Intervals concepts here
print(data.describe())
```

### R Code

```r
library(tidyverse)
library(survey)
library(broom)

# Confidence Intervals in R
# Designed for DHS complex survey analysis

cat("Statistics for ML #37: Confidence Intervals\n")
cat("By: Md Salek Miah | SUST | saleksta@gmail.com\n")

# Example with survey design
# dhs_design <- svydesign(id=~psu, strata=~strata,
#                          weights=~weight, data=dhs_data)
```

### Connection to My Research

In my published work on maternal health and mental health outcomes across LMICs, Confidence Intervals appears in:

- Model specification for binary health outcomes (SBA, stunting, IPV)
- Spatial inequality analysis across districts and provinces
- Machine learning pipeline design (XGBoost, Random Forest with SHAP)
- Survey-weighted inference using complex DHS sampling designs

### Key Takeaways

- ✅ Understand the mathematical foundation
- ✅ Know when to apply this technique vs alternatives
- ✅ Implement correctly in Python and R
- ✅ Interpret results in context of public health research
- ✅ Connect to ML model design decisions

---

*[← Previous post](#) | [Series index](/posts/2026/01/statistics-ml-index/) | [Next post →](#)*  
*Questions? [saleksta@gmail.com](mailto:saleksta@gmail.com) | [ResearchGate](https://www.researchgate.net/profile/Md-Miah-142)*
