import { NextFunction, Request, Response } from 'express';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { name, message } = error;
    switch (name) {
      case 'NOT_FOUND':
        return res.status(404).json({ message });
      case 'UNPROCESSABLE_ENTITY':
        return res.status(422).json({ message });
      default:
        return res.status(500).json({ message });
    }
  }

  public static throwErro(name: string, message: string) {
    const error = new Error(message);
    error.name = name;
    throw error;
  }
}

export default ErrorHandler;