// File: TodoCli.java

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TodoCli {
  public static void main(String[] args) {
    TodoService service = new TodoService();
    Scanner sc = new Scanner(System.in);

    while (true) {
      System.out.println("1. Add  2. List  3. Delete  0. Exit");
      int choice = sc.nextInt();
      sc.nextLine(); // consume newline

      if (choice == 0)
        break;

      switch (choice) {
        case 1:
          System.out.print("Title: ");
          String title = sc.nextLine();
          service.addTodo(title);
          break;
        case 2:
          for (Todo t : service.getAll()) {
            System.out.println(t.getId() + " - " + t.getTitle());
          }
          break;
        case 3:
          System.out.print("Id to delete: ");
          int id = sc.nextInt();
          service.deleteTodo(id);
          break;
        default:
          System.out.println("Invalid choice");
      }
    }
  }
}

// Reuse Todo, TodoService from previous program
class Todo {
  private int id;
  private String title;

  public Todo(int id, String title) {
    this.id = id;
    this.title = title;
  }

  public int getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }
}

class TodoService {
  private List<Todo> todos = new ArrayList<>();
  private int nextId = 1;

  public void addTodo(String title) {
    todos.add(new Todo(nextId++, title));
  }

  public List<Todo> getAll() {
    return todos;
  }

  public void deleteTodo(int id) {
    todos.removeIf(t -> t.getId() == id);
  }
}
