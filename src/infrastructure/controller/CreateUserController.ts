import { Request, Response } from "express";
import { ValidationError } from "../../domain/errors/ValidationError";
import { CreateUserService } from "../../domain/services/CreateUserService";

export class CreateUserController {
  constructor(
    private service: CreateUserService
  ) { }

  async handle(req: Request, res: Response) {
    const { email, password, role } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'INVALID_EMAIL' })
    }

    if (!password || typeof password !== 'string') {
      return res.status(400).json({ error: 'INVALID_PASSWORD' })
    }

    if (!role || typeof role !== 'string') {
      return res.status(400).json({ error: "INVALID_ROLE" })
    }

    try {
      const { id } = await this.service.create(email, password, role)

      return res.status(201).json({ id });
    } catch (err) {
      if (err instanceof ValidationError) {
        return res.status(400).json({ error: err.message });
      }

      console.error(err)
      return res.status(500).end()
    }
  }
}