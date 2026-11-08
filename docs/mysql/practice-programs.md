---
title: "MySQL Practice Programs"
sidebar_position: 30
---

# MySQL Practice Programs

Try these small projects. Each one teaches many skills.

## Program 1: School database

1. Create a database `school`.
2. Create tables `students`, `teachers`, `courses` and `enrollments`.
3. Insert at least 5 rows in each.
4. Write queries to:
   - List all students with their courses.
   - Find the number of students in each course.
   - Find students who are not enrolled in any course.
   - Find the course with the highest number of students.

## Program 2: Library system

Tables: `books`, `members`, `loans`.

```sql
CREATE TABLE books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  author VARCHAR(100),
  copies INT DEFAULT 1
);

CREATE TABLE members (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE loans (
  id INT PRIMARY KEY AUTO_INCREMENT,
  book_id INT,
  member_id INT,
  loan_date DATE,
  return_date DATE,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (member_id) REFERENCES members(id)
);
```

Tasks:

- Show books that are currently borrowed.
- Show members with books overdue for more than 14 days.
- Create a trigger that lowers `copies` when a loan is added.

## Program 3: Online shop

Tables: `customers`, `products`, `orders`, `order_items`.

Tasks:

- Show the total of each order.
- Find the top 5 selling products.
- Find customers who ordered more than 3 times.
- Create a view for monthly sales.
- Write a stored procedure that places an order inside a transaction.

## Program 4: Bank

Tables: `accounts`, `transactions`.

- Write a stored procedure to transfer money safely using a transaction.
- Create a trigger that saves every balance change in a log table.

## Tips

Start small. Make the tables first, add sample data, then write the queries one by one.
