---
title: "Statistics for ML #28 — Student t-Distribution"
date: 2026-01-28
permalink: /posts/2026/01/t-distribution/
tags: [statistics, probability, distributions, machine-learning]
---

## Student t-Distribution

This is post **#28** in the *Statistics for ML* series by **Md Salek Miah**, covering the essential statistical foundations for machine learning and epidemiology research.

> 📌 This series covers 100 topics from basic data types to advanced Bayesian ML. Tailored for public health researchers and data scientists working with DHS surveys, health data, and predictive modeling.

### Core Concept

The **Student t-Distribution** is a fundamental concept in probability and statistics. Understanding it deeply enables correct model selection, valid inference, and meaningful interpretation in both classical statistics and modern machine learning.

### Mathematical Foundation

Each distribution, theorem, or concept in this series is presented with:
- Formal mathematical definition
- Intuitive explanation  
- Real-world public health examples (DHS data, maternal health, child health)
- Python and R code for implementation
- Connection to ML algorithms and applications

### Why This Matters for ML & Public Health

In my research on maternal health across Bangladesh, Nepal, Zambia, and Burkina Faso using DHS survey data, these statistical foundations appear constantly:

- Choosing correct probability distributions for count outcomes (Poisson, Negative Binomial)
- Handling imbalanced binary outcomes (Bernoulli, SMOTE)  
- Valid inference under complex survey design (CLT, sampling theory)
- Interpreting SHAP values correctly (requires understanding expectations and conditional distributions)
- Model calibration: predicted probabilities must match true event frequencies

### Code Example

```python
# Template for post #28: Student t-Distribution
import numpy as np
import pandas as pd
from scipy import stats
import matplotlib.pyplot as plt

# Load your dataset
# df = pd.read_csv('dhs_data.csv')

# Explore the relevant distribution/concept
# See full worked example in the complete post
print("Statistics for ML #28: Student t-Distribution")
print("Author: Md Salek Miah | SUST | saleksta@gmail.com")
```

```r
# R equivalent
# library(tidyverse)
# library(survey)
# Full R code for Student t-Distribution
# Author: Md Salek Miah
```

---

### Further Reading

- [Full series index](/posts/2026/01/statistics-ml-index/)
- [My research publications](/publications/)
- Connect: [saleksta@gmail.com](mailto:saleksta@gmail.com) | [ResearchGate](https://www.researchgate.net/profile/Md-Miah-142)

*Part of the Statistics for ML series — post #28 of 100.*
