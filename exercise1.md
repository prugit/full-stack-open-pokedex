# 11.1 Warming up

### Language chosen: Python

##  What are the specific tools taking care of CI in Python
- linting: 
    - Pylint: Detect errors, style violations and offers refactoring suggestions.  
    - Flake8: Combine PyFlakes, pycodestyle and McCabe to check errors and styles
- testing: 
    - unittest: The testing framework built into Python (batteries included). Use a 
    class-based structure with methods starting with test_. Ideal for projects that prefer the official standard
    - pytest: framework makes it easy to write small, readable tests, and can scale 
    to support complex functional testing for applications and libraries.
- building: 
     Build System: Modern Python projects use pyproject.toml (as per PEP 518) to define build requirements and backend (e.g., setuptools, flit, poetry). This replaces the older setup.py method. 

## What alternatives are there to set up the CI besides Jenkins and GitHub Actions?
- GitLab CI/CD is ideal for teams wanting an all-in-one DevOps platform,
- CircleCI suits teams needing fast, scalable CI with strong parallelization, 
- Devtron stands out for cloud-native deployments with native Kubernetes support,
  GitOps-enabled pipelines, and a unified dashboard,

## Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?
To decide between self-hosted and cloud-based is needed the Proyect scale and needs. 
example of above would be:
- what are the critical part of the proyect
- the tolerance to fails
- the proyect need to be available all the time? even if is updating?
- how many people have acess to the proyect? how many teams?
- what are the speed needed to test the proyect?
