# Spring Boot

## 概念与常识

### 说说 Spring Boot 的启动流程

Spring Boot 的启动流程可以分为以下几个步骤：

1. 创建 SpringApplication 对象：Spring Boot 启动的时候，首先会创建一个 SpringApplication 对象，这个对象会包含应用的基本信息。
2. 运行 SpringApplication：SpringApplication 对象创建完成后，会调用其 run 方法来启动 Spring Boot 应用。在 run 方法中，会进行以下操作：
   - 创建一个新的 ApplicationContext 实例，这个实例是 Spring Boot 应用的核心，它会负责管理应用中的所有 Bean。
   - 创建一个新的 ApplicationArguments 实例，这个实例会包含应用启动时的命令行参数。
   - 加载所有的 Spring Boot Starter POMs，这些 POMs 会包含应用需要的所有依赖。
   - 加载所有的自动配置类，这些类会根据应用的依赖和配置自动配置应用的行为。
   - 加载所有的 Bean 定义，这些 Bean 定义会被 ApplicationContext 实例管理。
   - 刷新 ApplicationContext，这个操作会实例化所有的单例 Bean，并调用他们的初始化方法。
3. 启动内嵌的 Servlet 容器：如果 Spring Boot 应用是一个 Web 应用，那么在 ApplicationContext 刷新完成后，会启动一个内嵌的 Servlet 容器（例如 Tomcat）来处理 HTTP 请求。
4. 运行应用：最后，Spring Boot 应用会开始运行，处理用户的请求。

以上就是 Spring Boot 的启动流程，这个流程涵盖了 Spring Boot 的核心功能，包括自动配置、依赖管理、Bean 管理等等。

### 说说 Spring Boot 的起步依赖 (starter)

Spring Boot 的起步依赖是一种特殊的依赖关系，它可以简化构建配置。起步依赖本质上是一个 Maven 项目对象模型 (POM)，它定义了对其他库的传递依赖关系，这些库在进行 Spring Boot 应用程序开发时可能需要。这意味着，只需添加一个起步依赖，就可以自动包含一组相关的依赖项。

例如，如果你正在开发一个使用 Spring MVC 构建的 web 应用程序，你可能需要包含如下的起步依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```

这个起步依赖将自动包含 Spring MVC、Tomcat、Spring Boot 等等相关的依赖项。这样，你就不需要手动添加每一个可能需要的依赖项。

Spring Boot 提供了许多不同的起步依赖，包括：

- spring-boot-starter：这是核心起步依赖，包含自动配置支持、日志和 YAML。
- spring-boot-starter-data-jpa：包含了使用 Spring Data JPA 进行数据持久化的必要库。
- spring-boot-starter-security：包含了 Spring Security。
- spring-boot-starter-test：包含了常用的测试依赖，如 JUnit、Spring Test、Mockito 等。

使用起步依赖可以极大地简化构建配置，让你可以专注于应用程序的开发，而不是花费大量时间在管理依赖关系上。

### Spring Boot 实现热部署有哪几种方式？

Spring Boot 提供了几种实现热部署 (Hot Deployment) 的方式，主要包括以下几种：

1. Spring Boot DevTools：Spring Boot DevTools 是 Spring Boot 提供的一个为开发者服务的模块，其中包含了自动重启应用的功能。只要在项目中引入 DevTools 的依赖，就可以实现热部署。当项目中的文件发生改变时，DevTools 会自动重启应用，使改动立即生效。
2. JRebel：JRebel 是一个 Java 虚拟机插件，它可以在不重启应用的情况下，实时地将代码的改动加载到应用中。JRebel 支持大多数主流的 Java 框架和应用服务器，包括 Spring Boot。
3. HotSwapAgent：HotSwapAgent 是一个开源的 Java 类重新加载工具。它通过修改 JVM，使得在运行时修改类定义成为可能。HotSwapAgent 不仅支持基本的类重新加载，还支持 Spring、Hibernate 等框架的热部署。
4. LiveReload：LiveReload 是一个浏览器插件，它可以监听文件的改动，并在文件改动后自动刷新浏览器。如果你的项目是一个 Web 项目，那么 LiveReload 可以帮助你实现前端代码的热部署。

### Spring Boot 中的监视器是什么？它有什么用途？

Spring Boot Actuator 是 Spring Boot 中的监视器，它提供了一种监控和管理 Spring Boot 应用程序的方式，无论是生产环境还是开发环境。Actuator 主要提供了两类功能：HTTP 端点和指标。

1. HTTP 端点：Actuator 通过 HTTP 或 JMX 暴露各种端点 (Endpoint)，你可以通过这些端点获取应用程序的各种信息，比如应用程序的运行状况、环境变量、自动配置报告、线程情况、堆栈信息、HTTP 追踪等。
2. 指标 (Metrics)：Actuator 还提供了一套完整的度量集合，可以用来监控应用程序的运行情况，包括内存、垃圾回收、数据库连接池、HTTP 请求等。

Spring Boot Actuator 的主要目标是帮助你监控和管理你的应用程序，比如健康检查、审计、统计和 HTTP 追踪等。所有这些特性可以通过 JMX 或 HTTP endpoints 来访问。

## 自动配置

### 什么是 SpringBoot 自动配置 (Auto-configuration)？

SpringBoot 自动配置是 SpringBoot 框架的一个重要特性，它可以帮助开发者自动地装配应用程序所需要的各种组件和配置，极大地简化了 Spring 应用的初始搭建以及后续的维护工作。

SpringBoot 自动配置的核心是 @EnableAutoConfiguration 注解，这个注解会启动自动配置，扫描项目的 classpath，查找 META-INF/spring.factories 文件，然后根据文件中配置的类名进行自动配置。

例如，如果你在项目中添加了 spring-boot-starter-web 依赖，SpringBoot 就会自动配置与 Web 开发相关的各种组件，如 DispatcherServlet、ResourceHandlers、MessageConverters 等。如果你在项目中添加了 spring-boot-starter-data-jpa 依赖，SpringBoot 就会自动配置与 JPA 数据访问相关的各种组件，如 EntityManagerFactory、DataSource、TransactionManager 等。

这种自动配置的机制，使得开发者可以更加专注于业务逻辑的开发，而不需要花费大量的时间去手动配置和管理各种组件。

### SpringBoot 是如何实现自动配置的？如何实现按需加载？

SpringBoot 的自动配置是通过 @EnableAutoConfiguration 注解实现的。这个注解会启动自动配置，扫描项目的 classpath，查找 META-INF/spring.factories 文件，然后根据文件中配置的类名进行自动配置。

具体来说，SpringBoot 在启动时会加载所有的自动配置类，这些类都是在 spring.factories 文件中声明的。每个自动配置类都会尝试根据 classpath 和其他条件来决定是否应该启用自己的配置。例如，如果 classpath 中存在 H2 数据库的类，并且用户没有配置任何数据库连接信息，那么 H2 数据库的自动配置就会启用。

这种按需加载的机制，是通过 @Conditional 注解实现的。@Conditional 注解可以用来控制配置类或者配置方法是否应该被 Spring 容器加载。例如，@ConditionalOnClass 注解表示只有当 classpath 中存在指定的类时，才会加载配置；@ConditionalOnMissingBean 注解表示只有当 Spring 容器中不存在指定的 Bean 时，才会加载配置。

通过这种方式，SpringBoot 可以根据项目的实际需要，动态地加载或者忽略某些配置，从而实现了按需加载。

### 如何实现一个 SpringBoot Starter？

创建一个 SpringBoot Starter 主要包括以下步骤：

1. 创建一个 Maven 项目：首先，你需要创建一个新的 Maven 项目，这个项目将包含你的 Starter 的代码和配置。
2. 添加依赖：在项目的 pom.xml 文件中，你需要添加 SpringBoot Starter 的依赖，以及你的 Starter 所需要的其他依赖。
3. 创建自动配置类：在项目中，你需要创建一个或多个自动配置类，这些类将定义你的 Starter 如何自动配置应用程序。自动配置类通常会使用 @Configuration、@EnableConfigurationProperties、@ConditionalOnClass 等注解。
4. 创建配置属性类：如果你的 Starter 需要让用户提供一些配置，你可以创建一个或多个配置属性类。配置属性类通常会使用 @ConfigurationProperties 注解，并提供一些带有 @Value 注解的字段，用于接收用户的配置。
5. 创建 META-INF/spring.factories 文件：在项目的 resources/META-INF 目录下，你需要创建一个 spring.factories 文件。在这个文件中，你需要指定你的自动配置类的全类名，以便 SpringBoot 在启动时能够找到并加载它。
6. 打包并发布：最后，你可以使用 Maven 的 package 命令来打包你的 Starter，然后将它发布到 Maven 仓库，以便其他项目可以使用。

以上就是创建一个 SpringBoot Starter 的基本步骤。需要注意的是，创建 Starter 需要对 SpringBoot 的自动配置机制有深入的理解，并且需要根据 Starter 的实际需求来进行适当的设计和实现。
