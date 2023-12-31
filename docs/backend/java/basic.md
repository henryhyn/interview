# 基础

## 概念与常识

### 能否详细解释一下 JVM、JDK 和 JRE 之间的区别和各自的作用？

1. JVM (Java Virtual Machine)：Java 虚拟机，是 Java 程序运行的环境。JVM 是一个虚拟的计算机，它接收到字节码 (.class 文件)，然后解释或编译执行。JVM 是平台无关的，这意味着只要有 JVM，Java 程序就可以在任何操作系统上运行。
2. JRE (Java Runtime Environment)：Java 运行时环境，包含了 JVM 和 Java 类库等运行 Java 程序所必需的组件。JRE 是运行已经开发好的 Java 程序的用户所需要的环境。
3. JDK (Java Development Kit)：Java 开发工具包，是 Java 开发人员使用的工具集，它包含了 JRE 以及编译器 (javac)、调试器 (jdb) 等开发工具，还有很多用于开发 Java 应用的类库。简单来说，如果你需要运行 Java 程序，那么你需要 JRE；如果你需要开发 Java 程序，那么你需要 JDK。

### 能否解释一下什么是字节码，以及它在 Java 中的作用和重要性？

字节码是一种中间级别的代码，它是源代码 (如 Java) 编译后的结果。字节码不同于机器代码，因为它不是直接在硬件上运行的，而是在 Java 虚拟机 (JVM) 上运行的。这就是 Java 的“一次编写，到处运行”理念的关键所在。

在 Java 中，当你编译源代码时，Java 编译器 (javac) 会将其转换为字节码 (.class 文件)。这些字节码文件然后可以在任何安装了 JVM 的设备上运行，无论其底层硬件和操作系统是什么。JVM 在运行时将字节码转换为特定机器的机器代码。

字节码在 Java 中的重要性主要体现在以下几个方面：

1. 平台无关性：由于字节码可以在任何 JVM 上运行，因此 Java 程序可以在任何设备上运行，无论其底层硬件和操作系统是什么。
2. 安全性：JVM 在执行字节码之前，会进行一系列的安全检查，包括类型检查、异常处理检查等，以确保代码的安全性。
3. 优化：JVM 可以在运行时对字节码进行优化，以提高程序的性能。
4. 网络传输：字节码文件比源代码文件小，更适合在网络中传输。

因此，字节码是 Java 实现跨平台、安全性和高性能的关键。

## 数据类型

### Java 有哪几种数据类型

- 6 种数字类型：
  - 4 种整数型：`byte`、`short`、`int`、`long`
  - 2 种浮点型：`float`、`double`
- 1 种字符类型：`char`
- 1 种布尔型：`boolean`。

| 基本类型 | 包装类型 | 位数 | 字节 | 默认值 | 取值范围 |
|:-|:-|:-:|:-:|:-|:-|
| `byte` | `Byte` | 8 | 1 | 0 | -128 ~ 127 |
| `short` | `Short` | 16 | 2 | 0 | -32768 ~ 32767 |
| `int` | `Integer` | 32 | 4 | 0 | -2147483648 ~ 2147483647 |
| `long` | `Long` | 64 | 8 | 0L | -9223372036854775808 ~ 9223372036854775807 |
| `char` | `Character` | 16 | 2 | 'u0000' | 0 ~ 65535 |
| `float` | `Float` | 32 | 4 | 0f | 1.4E-45 ~ 3.4028235E38 |
| `double` | `Double` | 64 | 8 | 0d | 4.9E-324 ~ 1.7976931348623157E308 |
| `boolean` | `Boolean` | 1 | | false | true、false |

### 基本类型和包装类型的区别？

1. 存储位置：基本类型的局部变量存储在栈内存中，基本类型的成员变量存储在堆内存中，而包装类型的数据存储在堆内存中。
2. 默认值：基本类型有默认值，例如 int 的默认值为 0，boolean 的默认值为 false。而包装类型的默认值为 null。
3. 性能：基本类型的数据直接存储数值，因此在运算时速度更快。而包装类型的数据存储的是对象，需要先转换为基本类型才能进行运算，因此性能稍慢。
4. 功能：基本类型只有值，而包装类型是一个类，除了值之外还有一些方法，例如 Integer 类就有 parseInt、toString 等方法。
5. 使用场景：当需要使用对象方法时，或者在集合框架中，需要使用包装类型。而在进行大量数值运算时，为了提高性能，应使用基本类型。
6. Null 安全：基本类型的变量总是有一个默认值，不会为 null，因此在使用时不会出现 NullPointerException。而包装类型的变量默认值为 null，如果在没有进行初始化的情况下直接使用，可能会抛出 NullPointerException。

### 能否解释一下 Java 中的包装类型缓存机制

Java 中的包装类型缓存机制是 Java 为了提高性能和减少内存消耗而引入的一种优化策略。这种机制主要应用于 Integer、Short、Byte、Character、Long 和 Boolean 这几种包装类型。

以 Integer 为例，当我们通过 valueOf 方法创建 Integer 对象时，如果数值在-128 到 127 之间，Java 会直接从缓存中返回对应的 Integer 对象，而不是新建一个对象。这是因为 Java 预先在内存中创建了-128 到 127 这 256 个 Integer 对象，用于缓存。

这种机制的好处是，对于频繁使用的数值，我们可以直接使用缓存的对象，而不需要每次都新建对象，从而节省了内存空间，提高了性能。

但是，这种机制也有一定的局限性。首先，只有在使用 valueOf 方法时才会使用到缓存，如果我们直接使用 new Integer() 的方式创建对象，那么每次都会新建一个对象。其次，只有在-128 到 127 这个范围内的数值才会被缓存，如果超出这个范围，还是会新建对象。

这种机制在我们编写代码时，也需要特别注意。因为如果我们使用==来比较两个 Integer 对象，如果数值在-128 到 127 之间，那么可能会得到 true，但是如果超出这个范围，就可能会得到 false，因为超出范围的数值每次都会新建对象，所以地址不同，==比较的就是地址，所以会返回 false。所以在比较两个 Integer 对象时，我们应该使用 equals 方法，而不是==。

### 能否详细描述一下 Java 中的自动装箱和拆箱机制

自动装箱和拆箱是 Java 5 引入的一个新特性，它允许 Java 编译器自动将基本数据类型转换为对应的包装类型，反之亦然。这大大简化了编程过程，使得我们可以在处理基本数据类型和对象时更加灵活。

1. 自动装箱 (Autoboxing)：自动装箱是 Java 编译器在需要时自动将基本数据类型转换为其对应的包装类。例如，我们可以将一个 int 类型的值直接赋给一个 Integer 对象，Java 编译器会自动将这个 int 值装箱为一个新的 Integer 对象。
```java
int i = 10;
Integer integer = i;  // 自动装箱
```
2. 自动拆箱 (Unboxing)：自动拆箱是 Java 编译器在需要时自动将包装类转换为其对应的基本数据类型。例如，我们可以将一个 Integer 对象直接赋给一个 int 变量，Java 编译器会自动将这个 Integer 对象拆箱为一个 int 值。
```java
Integer integer = new Integer(10);
int i = integer;  // 自动拆箱
```

## 常量与变量

### 能否阐述一下在 Java 中成员变量和局部变量的区别？

在 Java 编程语言中，成员变量和局部变量是两种主要的变量类型，它们之间的主要区别在于它们的声明位置和作用范围。

1. 声明位置：
   - 成员变量：成员变量是在类中但在方法外声明的变量。它们可以在类的任何方法、构造方法或特定的块中使用。
   - 局部变量：局部变量是在方法、构造方法或块内声明的变量。
2. 作用范围：
   - 成员变量：成员变量的作用范围是整个类，因此在类的任何地方都可以访问。
   - 局部变量：局部变量只能在声明它的方法、构造方法或块中使用。
3. 默认值：
   - 成员变量：成员变量有默认值。例如，对于数字，默认值是 0；对于布尔值，默认值是 false；对于对象引用，默认值是 null。
   - 局部变量：局部变量没有默认值。在使用局部变量之前，必须显式初始化它们，否则 Java 编译器会报错。
4. 存储位置：
   - 成员变量：成员变量存储在堆内存中，因为它们是对象的一部分。
   - 局部变量：局部变量存储在栈内存中，因为它们在方法或块执行时创建，执行完毕后就会被销毁。
5. 生命周期：
   - 成员变量：成员变量的生命周期与对象的生命周期相同，当对象被垃圾回收时，成员变量也会被销毁。
   - 局部变量：局部变量的生命周期只在方法或块的执行期间，一旦方法或块执行完毕，局部变量就会立即消失。
6. 访问修饰符：
   - 成员变量：可以使用访问修饰符 (public, private, protected) 来修饰成员变量，以控制其访问级别。
   - 局部变量：不能使用访问修饰符来修饰局部变量，它们只能在声明它们的块或方法中访问。

## 方法

### 静态方法为什么不能调用非静态成员？

1. 生命周期的不同：静态方法和静态变量属于类，它们在类加载的时候就已经存在了，而非静态成员变量和方法是属于对象的，它们只有在创建对象的时候才会存在。因此，静态方法在调用时可能非静态成员还没有被初始化，所以不能调用非静态成员。
2. 内存分配的不同：静态方法和静态变量是存储在方法区的，而非静态成员变量和方法是存储在堆内存的。静态方法不能直接访问堆内存中的数据，所以不能调用非静态成员。

### Java 中方法的重载和重写的区别？

在 Java 编程中，方法的重载 (Overloading) 和重写 (Overriding) 是两个重要的概念。它们都是实现多态的方式，但是它们的使用场景和规则有所不同。

1. 方法的重载 (Overloading):
   方法的重载是指在同一个类中可以有多个同名方法，但是这些方法的参数列表必须不同 (即参数的个数或类型不同)。重载的方法可以有不同的访问修饰符，返回类型可以相同也可以不同，只要参数列表不同就可以。重载是在编译时期确定的，也就是说，调用哪个方法是在编译时期就已经确定了。
2. 方法的重写 (Overriding):
   方法的重写是指子类重写父类的方法。重写的方法必须和被重写的方法有相同的方法名、参数列表和返回类型。重写的方法不能比被重写的方法有更严格的访问权限。重写是在运行时期确定的，也就是说，调用哪个方法是在运行时期才能确定。

总结一下，方法的重载是在同一个类中的多个方法有相同的名字但参数列表不同，而方法的重写是子类重写父类的方法，方法名、参数列表和返回类型都必须相同。

## 对象

### Java 中的 Bean 指的是什么？

在 Java 编程中，Bean 通常指的是遵循特定命名规则的 Java 类，这些规则包括有一个无参数的构造函数，所有属性都是私有的 (通过 getter 和 setter 方法进行访问)，并且该类应该是可序列化的。Java Beans 主要用于封装多个对象作为一个单一的对象 (即 Bean)。

Java Beans 是一种 Java 语言的组件技术，可以被视为一种可重用的软件组件，或者说是一个封装了多个对象的对象。它们主要用于处理数据，但也可以包含业务逻辑。

Java Beans 的主要特点包括：

1. 可重用：一旦创建，Java Beans 可以在多个项目中重复使用，无需进行任何修改。
2. 可自定义：Java Beans 的属性可以根据需要进行自定义。
3. 可序列化：Java Beans 可以被转换为字节流，这使得它们可以轻松地在网络上进行传输，或者可以被存储在磁盘上以供以后使用。
4. 支持事件处理：Java Beans 支持事件监听和处理，这使得它们可以响应用户的交互操作。

在 Java 开发中，Beans 常常被用于如 JavaServer Pages (JSP)、Enterprise JavaBeans (EJB)、Spring Framework 等技术中。

### Java Bean 与 Plain Old Java Object 有什么区别？

Java Bean 和 Plain Old Java Object (POJO) 都是 Java 编程中的术语，它们都代表了一种 Java 对象，但是它们之间存在一些关键的区别。

1. 规范：
   - Java Bean：Java Bean 是一种遵循特定命名约定的 Java 类，它应该有一个无参的构造函数，所有的属性应该有对应的 getter 和 setter 方法，且可以序列化。这些规范使得 Java Bean 可以被各种 Java 框架和库更容易地使用和管理。
   - POJO：POJO 是 Plain Old Java Object 的缩写，它不需要遵循任何特定的命名约定，也不需要实现任何接口或继承任何类 (除了必要的 java.lang.Object)。POJO 的主要目标是简化 Java 对象的开发和使用。
2. 用途：
   - Java Bean：Java Bean 通常用于封装数据，它们可以被用作数据传输对象 (DTO)，也可以被用于业务逻辑。Java Bean 还可以被用于 JavaBeans 组件模型，这是一种在可视化设计环境中重用组件的框架。
   - POJO：POJO 通常用于简化企业应用的开发。例如，Spring 框架就大量使用了 POJO，它允许开发者使用 POJO 来实现业务逻辑，而不需要继承特定的类或实现特定的接口。
3. 约束：
   - Java Bean：Java Bean 有更多的约束，例如必须有一个无参的构造函数，必须实现 Serializable 接口等。
   - POJO：POJO 的约束较少，它只需要是一个普通的 Java 对象，不需要继承或实现任何特定的类或接口。

总的来说，Java Bean 和 POJO 都是 Java 对象，但 Java Bean 遵循更多的规范，而 POJO 更加灵活和简单。在实际的开发中，应根据具体的需求和场景来选择使用 Java Bean 还是 POJO。
