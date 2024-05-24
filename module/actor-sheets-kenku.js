/*
 * DCC Kenku character sheet overrides
 */

import DCCActorSheet from '/systems/dcc/module/actor-sheet.js'

/**
 * Extend the zero-level/NPC sheet for Kenku
 * @extends {DCCActorSheet}
 */
class ActorSheetKenku extends DCCActorSheet {
  /** @override */
	async getData (options) {
    const data = await super.getData(options)
    this.options.template = 'modules/kenku/templates/actor-sheet-kenku.html'
    if (data.system.details.sheetClass !== 'Kenku') {
      this.actor.update({
        'data.system.class.className': game.i18n.localize('Kenku.Kenku')
      })
    }
    // Add in Kenku specific data if missing
    if (data.system.details.sheetClass !== 'Kenku') {
      this.actor.update({
        'data.details.sheetClass': 'Kenku',
        'data.class.spellCheckAbility': 'per',
        'data.details.critRange': 20
      })
    }
    return data
  }
}

export {
  ActorSheetKenku
}