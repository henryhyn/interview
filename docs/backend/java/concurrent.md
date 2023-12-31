# 并发与多线程

## Java 中并发与多线程的区别与联系

在 Java 中，多线程和并发是两个经常被混淆的概念。然而，它们之间存在着明显的区别和联系。

并发 (Concurrency) 是指两个或更多的任务在同一时间段内发生。这些任务可能会交替执行，也可能同时执行，但并不意味着它们会在同一时刻执行。并发主要在单核处理器中使用，通过时间片轮转或事件驱动等方式实现。

多线程 (Multithreading) 是并发的一种特殊形式。它允许单个程序内的多个线程同时执行。这些线程可以并行运行 (在多核处理器上)，也可以交替运行 (在单核处理器上)。多线程可以提高程序的性能和响应速度，但也会增加程序的复杂性和同步问题。

并发和多线程之间的主要联系在于它们都是为了提高程序的执行效率。在 Java 中，可以通过实现 Runnable 接口或继承 Thread 类来创建新的线程，从而实现并发和多线程。

总的来说，多线程是实现并发的一种手段，而并发则是对问题的一种抽象描述。在 Java 中，我们需要理解并发和多线程的概念，以便更好地设计和实现高效的程序。

## 你可以解释一下 Java 中的多线程编程和同步机制吗？

在 Java 中，多线程编程是一种强大的功能，允许程序同时执行多个任务。这是通过创建 Thread 类的实例或实现 Runnable 接口来实现的。每个线程都有自己的堆栈，用于存储局部变量，但它们共享程序的内存，可以访问相同的变量。

然而，这也带来了问题。当两个或更多的线程需要访问和修改同一变量时，可能会出现问题，这就是所谓的线程干扰。为了避免这种情况，Java 提供了同步机制。

同步是一种工具，可以帮助我们控制多个线程对共享资源的访问。Java 中的同步机制主要有两种形式：同步方法和同步块。

1. 同步方法：通过在方法声明中添加 synchronized 关键字，可以创建同步方法。在任何时候，只有一个线程可以访问同步方法，其他试图访问这个方法的线程将被阻塞，直到第一个线程退出该方法。
2. 同步块：同步块是同步方法的一种更细粒度的版本。它允许你只同步代码的特定部分，而不是整个方法。同步块是通过使用 synchronized 关键字和一个锁对象来定义的。

在 Java 中，每个对象都有一个内置的锁 (也称为监视器锁)。当一个线程进入同步方法或块时，它会获取该对象的锁。只有当它退出同步方法或块时，它才会释放该锁，其他线程才能获取该锁并访问该方法或块。

这就是 Java 中的多线程编程和同步机制的基本概念。理解和正确使用这些概念对于编写正确和高效的并发程序至关重要。
