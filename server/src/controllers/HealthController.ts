import { Request, Response } from "express";

export class HealthController {
  public static async getHealth(req: Request, res: Response): Promise<Response> {
    return res.json({
      body: req.body,
      environment: process.env.NODE_ENV,
    });
  }
}
