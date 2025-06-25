import { application } from "controllers/application"
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
import AnimatedBackgroundController from "./animated_background_controller"

// Charge tous les controllers automatiquement depuis le dossier
eagerLoadControllersFrom("controllers", application)

// Enregistre ton controller spécifique
application.register("animated-background", AnimatedBackgroundController)

