public class Main {
  public static void main(String[] args) {
    User u = new User("Bharath", 23);
    System.out.println(u.show());
  }
}

class User {
  private String name;
  private int age;

  public User(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String show() {
    return "Hello, my name is " + name + " and I am " + age + " years old.";
  }
}
