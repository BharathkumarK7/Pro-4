// File : TodoApp.java

import java.util.ArrayList;
import java.util.List;

public class TodoApp {
  public static void main(String[] args) {
    TodoService service = new TodoService();

    service.addTodo("Learn Java Backend");
    service.addTodo("Connect React with java Backend");

    System.out.println("All Todos:");
    for (Todo t : service.getAll()) {
      System.out.println(t.getId() + " -" + t.getTitle());
    }
    service.deleteTodo(1);
    System.out.println("After deleting id = 1:");
    for (Todo t : service.getAll()) {
      System.out.println(t.getId() + " -" + t.getTitle());
    }
  }
}

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
