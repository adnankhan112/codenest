---
title: Python Dates and Time
sidebar_position: 24.5
---

# Python Dates and Time

```python
from datetime import datetime, date, timedelta

now = datetime.now()
print(now)
print(now.year, now.month, now.day)
print(now.strftime("%d-%m-%Y %H:%M"))   # 05-11-2026 14:30

today = date.today()
tomorrow = today + timedelta(days=1)
print(tomorrow)

born = datetime.strptime("2000-05-20", "%Y-%m-%d")
print((now - born).days // 365, "years old")
```

| Code | Meaning |
| --- | --- |
| `%Y` | Year (2026) |
| `%m` | Month number |
| `%d` | Day |
| `%H` | Hour (24 hour) |
| `%M` | Minute |
| `%S` | Second |
