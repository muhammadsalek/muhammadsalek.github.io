---
title: "Machine Learning in Public Health: Why Explainability Matters"
date: 2025-12-01
permalink: /posts/2025/12/ml-public-health-explainability/
tags:
  - machine learning
  - public health
  - explainable AI
  - SHAP
  - epidemiology
---

In recent years, machine learning (ML) has transformed how researchers analyze complex health data. From predicting skilled birth attendance to classifying air quality, algorithms like XGBoost and Random Forest now routinely outperform traditional statistical models. But in public health, **accuracy alone is not enough** — we need to understand *why* a model makes a prediction.

## The Challenge: Black-Box Models in Health Policy

When a model predicts that a woman in rural Bangladesh is at high risk of delivering without skilled attendance, policymakers need to know which factors drove that prediction. Was it lack of antenatal care visits? Geographic remoteness? Low education? Without this understanding, interventions cannot be targeted effectively.

This is where **Explainable AI (XAI)** becomes critical.

## SHAP Values: Making ML Transparent

SHAP (SHapley Additive exPlanations) values assign each feature a contribution score for a specific prediction. In our studies on skilled birth attendance across Bangladesh, Nepal, Zambia, and Burkina Faso, SHAP analysis consistently revealed:

- **Antenatal care visits** — the single most important predictor across all countries
- **Wealth index** — strong positive effect, but with significant spatial heterogeneity
- **Education level** — non-linear effects, with diminishing returns at higher levels
- **Place of residence** — rural–urban disparity remained even after adjusting for other factors

## Handling Imbalanced DHS Survey Data

Demographic and Health Survey (DHS) data presents a unique challenge: outcome classes are often severely imbalanced. For example, in Burkina Faso, only ~67% of deliveries occurred with skilled attendance, and simple models trained on raw data systematically underpredict the minority class.

Our approach uses **SMOTE (Synthetic Minority Over-sampling Technique)** combined with survey-weighted sampling to address this, followed by threshold optimization on the validation set using the F1-score and ROC-AUC.

## Key Takeaway

The most powerful ML model is useless if it cannot inform policy. In all our manuscripts, we pair predictive modeling with:

1. **SHAP global importance plots** for feature ranking
2. **SHAP dependence plots** for interaction effects
3. **Choropleth maps** for spatial inequality visualization
4. **Stratified analyses** by rural/urban, wealth quintile, and education level

This combination transforms a predictive model into an **actionable policy tool**.

---

*For questions or collaboration, contact: [saleksta@gmail.com](mailto:saleksta@gmail.com)*  
*Related publications: See [Publications page](/publications/)*
