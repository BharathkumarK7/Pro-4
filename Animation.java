import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public

class Animation extends JPanel implements ActionListener {
  Timer timer = new Timer(1, this);
  int x = 0;

  public Animation() {
    timer.start();
  }

  public void paintComponent(Graphics g) {
    super.paintComponent(g);
    g.fillOval(x++, 50, 300, 300);
    repaint();
  }

  public void actionPerformed(ActionEvent e) {
    repaint();
  }

  public static void main(String[] args) {
    JFrame f = new JFrame();
    f.add(new Animation());
    f.setSize(1400, 1200);
    f.setVisible(true);
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
}
