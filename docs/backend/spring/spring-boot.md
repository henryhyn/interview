# Spring Boot

## 说说 Spring Boot 的启动流程

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

## 说说 Spring Boot 的自动装配

Spring Boot 的自动装配是其核心功能之一，它可以极大地简化 Spring 应用程序的配置。自动装配的主要目标是减少和简化开发人员的工作，使他们能够更快地开始编写代码，而不是花费大量时间在配置和引导应用程序上。

自动装配的工作原理是，当 Spring Boot 应用程序启动时，它会自动扫描所有的 classpath，查找所有的 Spring 组件（如 beans，controllers，services 等）和各种配置类。然后，Spring Boot 会自动创建和配置这些组件的实例，并将它们注册到 Spring 应用程序上下文中。

这个过程是通过使用一系列的“starter”依赖来完成的。这些 starter 依赖是预先定义好的依赖集，它们包含了创建特定类型的应用程序所需的所有库和框架。例如，如果你正在创建一个 web 应用程序，你可以添加 spring-boot-starter-web 依赖，它会自动包含 Spring MVC，Tomcat 等等。

自动装配的另一个重要特性是条件装配。这意味着某些 bean 或配置只有在满足特定条件时才会被创建和注册。例如，如果 classpath 中存在特定的类，或者某个 bean 已经被定义，或者某个系统属性有特定的值等等。这使得自动装配可以适应各种不同的环境和需求。

总的来说，Spring Boot 的自动装配大大简化了 Spring 应用程序的配置，使开发人员可以更专注于编写业务代码。
