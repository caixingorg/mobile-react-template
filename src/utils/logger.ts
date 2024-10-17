// src/utils/logger.ts

enum LogLevel {
    INFO,
    WARN,
    ERROR,
  }
  
  class Logger {
    private static instance: Logger;
  
    private constructor() {}
  
    public static getInstance(): Logger {
      if (!Logger.instance) {
        Logger.instance = new Logger();
      }
      return Logger.instance;
    }
  
    private log(level: LogLevel, message: string, ...args: any[]) {
      const timestamp = new Date().toISOString();
      const formattedMessage = `[${timestamp}] [${LogLevel[level]}] ${message}`;
  
      switch (level) {
        case LogLevel.INFO:
          console.log(formattedMessage, ...args);
          break;
        case LogLevel.WARN:
          console.warn(formattedMessage, ...args);
          break;
        case LogLevel.ERROR:
          console.error(formattedMessage, ...args);
          break;
      }
  
      // 这里可以添加将日志发送到远程服务的逻辑
    }
  
    public info(message: string, ...args: any[]) {
      this.log(LogLevel.INFO, message, ...args);
    }
  
    public warn(message: string, ...args: any[]) {
      this.log(LogLevel.WARN, message, ...args);
    }
  
    public error(message: string, ...args: any[]) {
      this.log(LogLevel.ERROR, message, ...args);
    }
  }
  
  export default Logger.getInstance();