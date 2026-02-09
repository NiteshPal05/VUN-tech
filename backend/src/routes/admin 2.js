import express from "express"
import { requireAuth } from "../middleware/auth.js"
import {
  adminLogin,
  createCategory,
  createProject,
  createService,
  createTrending,
  deleteCategory,
  deleteChatLead,
  deleteContact,
  deleteProject,
  deleteService,
  deleteTrending,
  getCategories,
  getChatLeads,
  getContacts,
  getOrders,
  getProjects,
  getServices,
  getTrending,
  markContactRead,
  updateCategory,
  updateOrder,
  updateProject,
  updateService,
  updateTrending,
} from "../controllers/adminController.js"

const router = express.Router()

router.post("/admin/login", adminLogin)
router.get("/admin/contacts", requireAuth, getContacts)
router.get("/admin/chat-leads", requireAuth, getChatLeads)
router.delete("/admin/chat-leads/:id", requireAuth, deleteChatLead)
router.get("/admin/orders", requireAuth, getOrders)
router.patch("/admin/orders/:id", requireAuth, updateOrder)
router.get("/admin/trending", requireAuth, getTrending)
router.post("/admin/trending", requireAuth, createTrending)
router.put("/admin/trending/:id", requireAuth, updateTrending)
router.delete("/admin/trending/:id", requireAuth, deleteTrending)
router.get("/admin/services", requireAuth, getServices)
router.get("/admin/categories", requireAuth, getCategories)
router.get("/admin/projects", requireAuth, getProjects)
router.patch("/admin/contacts/:id/read", requireAuth, markContactRead)
router.delete("/admin/contacts/:id", requireAuth, deleteContact)
router.post("/admin/services", requireAuth, createService)
router.put("/admin/services/:id", requireAuth, updateService)
router.post("/admin/categories", requireAuth, createCategory)
router.put("/admin/categories/:id", requireAuth, updateCategory)
router.delete("/admin/categories/:id", requireAuth, deleteCategory)
router.post("/admin/projects", requireAuth, createProject)
router.put("/admin/projects/:id", requireAuth, updateProject)
router.delete("/admin/services/:id", requireAuth, deleteService)
router.delete("/admin/projects/:id", requireAuth, deleteProject)

export default router
