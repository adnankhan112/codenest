---
title: Python Packages and Virtual Environments
sidebar_position: 24.8
---

# Python Packages and Virtual Environments

## pip

`pip` installs packages made by other people.

```
pip install requests
pip list
pip uninstall requests
```

## Virtual environment

A virtual environment gives each project its own set of packages.

```
python -m venv venv
venv\Scripts\activate       (Windows)
source venv/bin/activate    (Mac and Linux)
```

After activating, `pip install` affects only this project.

## requirements.txt

```
pip freeze > requirements.txt
pip install -r requirements.txt
```

## Your own package

A folder with Python files and an empty `__init__.py` file is a package you can import.
