# 设计模式

## 在 Java 中实现单例模式有哪些方式，它们的优缺点是什么？

在 Java 中，实现单例模式主要有以下几种方式：

1. 饿汉式：在类加载时就完成了初始化，所以类加载较慢，但获取对象的速度快。这种方式基于类加载机制避免了多线程的同步问题，不过，如果从始至终从未使用过这个实例，则会造成内存的浪费。

```java
public class Singleton {
    private static Singleton instance = new Singleton();
    private Singleton (){}
    public static Singleton getInstance() {
        return instance;
    }
}
```

2. 懒汉式：在类加载时不初始化。这种方式可能会在多线程环境下产生多个实例，可以通过 synchronized 关键字解决，但也会使得线程阻塞，效率降低。

```java
public class Singleton {
    private static Singleton instance;
    private Singleton (){}
    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

3. 双重检查锁定：在懒汉式的基础上增加了一层 null 值判定，减少了不必要的同步，但在某些情况下可能会出现失效的问题。

```java
public class Singleton {
    private volatile static Singleton instance;
    private Singleton (){}
    public static Singleton getSingleton() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
```

4. 静态内部类：这种方式同样利用了 classloader 机制来保证初始化 instance 时只有一个线程，它与饿汉式一样，也是利用了类装载机制来保证只有一个线程初始化实例。不同的是，它是在内部类装载的时候进行的，这样也是线程安全的，同时没有性能损耗。

```java
public class Singleton {
    private static class SingletonHolder {
        private static final Singleton INSTANCE = new Singleton();
    }
    private Singleton (){}
    public static final Singleton getInstance() {
        return SingletonHolder.INSTANCE;
    }
}
```

5. 枚举：使用枚举实现单例模式是 Effective Java 作者 Josh Bloch 提倡的方式，它不仅能避免多线程同步问题，而且还能防止反序列化重新创建新的对象。

```java
public enum Singleton {
    INSTANCE;
    public void whateverMethod() {
    }
}
```

以上就是 Java 中实现单例模式的几种主要方式，各有优缺点，需要根据实际情况选择使用。
