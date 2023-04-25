import { Router } from "express";
import { getProducts } from "../controller/products.js";
const router = Router();
router.get('/', getProducts);
export default router;
//# sourceMappingURL=products.js.map