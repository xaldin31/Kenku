/* global Actors */

import * as KenkuSheets from './actor-sheets-kenku.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */
Hooks.once('init', async function () {
  console.log(`DCC | Initializing Dungeon Crawl Classics System`)
  console.log(`Loading DCC kenku Class`)

  // Register sheet application classes

  Actors.registerSheet('kenku', KenkuSheets.ActorSheetKenku, { types: ['Player'], label: 'kenku.ActorSheetKenku' })
})

