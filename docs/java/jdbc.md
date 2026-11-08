---
title: Java and Databases (JDBC)
sidebar_position: 50
---

# Java and Databases (JDBC)

JDBC lets Java talk to a database such as MySQL.

```java
import java.sql.*;

public class Main {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:mysql://localhost:3306/school";

        try (Connection con = DriverManager.getConnection(url, "root", "password")) {

            String sql = "SELECT name, marks FROM students WHERE marks > ?";
            PreparedStatement ps = con.prepareStatement(sql);
            ps.setInt(1, 50);

            ResultSet rs = ps.executeQuery();
            while (rs.next()) {
                System.out.println(rs.getString("name") + " " + rs.getInt("marks"));
            }
        }
    }
}
```

- Add the MySQL driver (a `.jar` file) to your project.
- Always use `PreparedStatement` with `?` placeholders. It protects you from SQL injection attacks.
