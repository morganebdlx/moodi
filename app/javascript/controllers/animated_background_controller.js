import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["mainGradient", "orbLarge", "orbMedium", "orbSmall1", "orbSmall2", "particlesContainer"]
  static values = { theme: String }

  connect() {
    this.setupGradients()
    this.createParticles(20)
  }

  setupGradients() {
    const warmColors = ['warm-1', 'warm-2', 'warm-3']
    const coolColors = ['cool-1', 'cool-2', 'cool-3']

    const colors = this.themeValue === 'warm' ? warmColors : coolColors

    // Appliquer les classes aux dégradés et orbes
    this.mainGradientTarget.className = colors[0]
    this.orbLargeTarget.className = `orb-large ${colors[1]}`
    this.orbMediumTarget.className = `orb-medium ${colors[2]}`
    this.orbSmall1Target.className = `orb-small ${colors[0]}`
    this.orbSmall2Target.className = `orb-small-2 ${colors[1]}`
  }

  createParticles(count) {
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div')
      particle.classList.add('particle')

      // Couleur selon thème
      particle.classList.add(this.themeValue === 'warm' ? 'bg-orange-400' : 'bg-cyan-400')

      // Position aléatoire
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Animation delay et durée aléatoire
      particle.style.animationDelay = `${Math.random() * 10}s`
      particle.style.animationDuration = `${15 + Math.random() * 10}s`

      this.particlesContainerTarget.appendChild(particle)
    }
  }
}
