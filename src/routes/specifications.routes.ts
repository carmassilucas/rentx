import { Router } from 'express';

import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.post('/', createSpecificationController.handle);

const listSpecificationsController = new ListSpecificationsController();
specificationRoutes.get('/', listSpecificationsController.handle);

export { specificationRoutes };
