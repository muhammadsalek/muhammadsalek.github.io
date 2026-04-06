---
title: "Statistics for ML #78 — Imbalanced Data — SMOTE & Class Weights"
date: 2026-04-09
permalink: /posts/2026/04/imbalanced-data/
tags: [machine-learning, dimensionality-reduction, model-evaluation]
---

## Imbalanced Data — SMOTE & Class Weights

Post **#78/100** in the *Statistics for ML* series — [Md Salek Miah](/) | Statistician & ML Researcher | SUST, Bangladesh.

**Imbalanced data** is ubiquitous in health outcomes research. In DHS data, rare outcomes like maternal mortality or specific diseases can have extreme class imbalance.

### Why Standard Models Fail

A model that always predicts the majority class achieves high accuracy but is clinically useless.

**Example:** If only 5% of women experienced pregnancy loss, a trivial model predicting "no loss" for everyone achieves 95% accuracy but 0% sensitivity.

### Solutions

| Method | Description | When to use |
|--------|-------------|-------------|
| **SMOTE** | Synthetic Minority Over-sampling | Small-medium datasets |
| **Class weights** | Penalise majority misclassification | Any size, simpler |
| **Threshold tuning** | Adjust decision threshold | Post-training |
| **Ensemble methods** | BalancedBaggingClassifier | Works well in practice |
| **Precision-Recall AUC** | Better metric than ROC-AUC | Severe imbalance |

```python
from imblearn.over_sampling import SMOTE
from imblearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# SMOTE + Random Forest pipeline (used in my DHS research)
pipeline = Pipeline([
    ('smote', SMOTE(random_state=42, sampling_strategy=0.5)),
    ('clf', RandomForestClassifier(class_weight='balanced', n_estimators=200))
])
pipeline.fit(X_train, y_train)
print(classification_report(y_test, pipeline.predict(X_test)))
```

---
*[Series Index](/posts/2026/01/statistics-ml-index/) | Post #78/100 | [Md Salek Miah](/) | [saleksta@gmail.com](mailto:saleksta@gmail.com)*
