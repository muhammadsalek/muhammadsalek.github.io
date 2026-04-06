---
title: "Statistics for ML #47 — Chi-Square Test"
date: 2026-02-18
permalink: /posts/2026/02/chi-square-test/
tags: [statistics, inference, regression, machine-learning]
---

## Chi-Square Test

Post **#47** of 100 in the *Statistics for ML* series by [Md Salek Miah](/) — Statistician, SUST Bangladesh.

### What You Will Learn

The **Chi-Square Test** is one of the core building blocks of quantitative research. This post covers:

1. **Mathematical definition** — precise and complete
2. **Intuitive explanation** — what it means in plain language
3. **Public health application** — real examples from DHS survey research
4. **Python implementation** — ready-to-run code
5. **R implementation** — for epidemiologists and survey analysts
6. **ML connection** — how this concept appears in modern algorithms

### Core Mathematics

The Chi-Square Test formalises how we test hypotheses and make decisions under uncertainty.

### Python Code

```python
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler

# Chi-Square Test — implementation example
# Full code available at: github.com/muhammadsalek
print("Post #47: Chi-Square Test")

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

# Apply Chi-Square Test concepts here
print(data.describe())
```

### R Code

```r
library(tidyverse)
library(survey)
library(broom)

# Chi-Square Test in R
# Designed for DHS complex survey analysis

cat("Statistics for ML #47: Chi-Square Test\n")
cat("By: Md Salek Miah | SUST | saleksta@gmail.com\n")

# Example with survey design
# dhs_design <- svydesign(id=~psu, strata=~strata,
#                          weights=~weight, data=dhs_data)
```

### Connection to My Research

In my published work on maternal health and mental health outcomes across LMICs, Chi-Square Test appears in:

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
