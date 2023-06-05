import { Router } from "express";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService"; 
import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(
    specificationsRepository
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
})

specificationsRoutes.get("/", (request, response) => {
  const all = specificationsRepository.list();

  return response.json(all);
})

export { specificationsRoutes };