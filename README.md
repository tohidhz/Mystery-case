# The Calloway Files

A story-driven detective mystery board game for the browser. Four fully written murder cases from the archive of Calloway & Associates, 1931–1953: search the rooms, interrogate everyone, pin the evidence to the board, and name the killer before the clock runs out.

Playable in **English and Persian (فارسی)** — the whole game, prose included, not just the buttons. Every room is a hand-drawn scene you search by eye.

## Run it

No build, no server, no dependencies:

```
open index.html        # or just double-click it
```

(Fonts load from Google Fonts; without a connection the game falls back to system typefaces.)

## The four cases

| File | Case | Setting | Difficulty |
|------|------|---------|------------|
| 001 | The Last Toast of Blackwood Manor | A vineyard estate, 1931 — the patriarch poisoned at his own birthday toast | ◆◇◇ |
| 002 | The Final Bow | The Orpheum Theatre, 1936 — a prop dagger that stopped being a prop, live on stage | ◆◆◇ |
| 003 | Dead Air | Radio station WQXT, 1947 — a host electrocuted through his microphone during sixty seconds of scheduled silence | ◆◆◆ |
| 004 | The Nine O'Clock Vanishing | The Meridian Express, snowbound at Larkspur Pass, 1953 — a locked-room strangling with an hour that doesn't add up | ◆◆◆ |

Each case has its own floor plan, five suspects (plus witnesses), around two dozen pieces of evidence, branching interrogations, red herrings with real explanations, a confession scene you can earn, and four different written endings.

## How to play

- **The clock is the game.** Every move costs minutes — travel 10, questioning 10, searching 20. When the deadline arrives, you accuse with whatever you have.
- **Search the scene.** Each room is an illustrated plate with a pin on every searchable detail — click the decanter, the fire bucket, the patch bay. Enlarge the plate to zoom and pan around it. Pins mark themselves examined as you work, and locked ones show what you still can't reach.
- **Search rooms** for physical evidence. Some things are locked until you find what opens them.
- **Question everyone.** New lines of inquiry open as evidence surfaces — confronting a suspect with the right exhibit changes what they'll say.
- **Watch the Board.** Deductions form themselves on the corkboard when you hold the right combination of evidence. Two of them can unlock a final confrontation that breaks the killer in the room.
- **Accuse** when ready: the culprit, the motive, and up to three exhibits that prove it. Right name + right motive + real proof earns the full ending; anything less earns one of the others.

Progress and best results are saved in the browser (localStorage).

## Sound

Every sound is synthesized in the browser with Web Audio — there are no audio
files, because the game is a folder you open. Each case gets its own room tone
(rain on the manor glass, dust-quiet in the theatre, mains hum in the radio
studio, wind against the stalled train) plus short cues: a clock tick when a
minute leaves, paper when an exhibit is logged, a struck string when a
deduction closes, a stamp on the verdict.

The `♪` toggle sits beside the clock and on the desk; the choice is remembered.
Browsers keep audio suspended until you interact with the page, so the room
fades in after your first click rather than the moment it loads.

## Languages

Use the toggle in the corner of the desk screen; the choice is remembered. Persian runs the game right-to-left with Persian numerals (۹:۴۰ ب.ظ), Persian exhibit letters (مدرک الف / ب / پ), and Naskh for narrative prose. The floor plan and the scene plates deliberately keep their geography — a room doesn't move house because you changed language.

Translation is a text pack layered over the English structure, so anything untranslated falls back to English rather than breaking.

## Project layout

```
index.html      shell and screens
css/style.css   the whole look — desk, dossiers, corkboard, stamps, scenes
js/i18n.js      interface strings, English + Persian
js/audio.js     procedural sound: room tone per case, cues, mute state
js/case1.js     Case 001 data (locations, suspects, dialogue, clues, deductions, endings)
js/case2-4.js   Cases 002–004
js/case1.fa.js  Persian text pack for case 001 (…and case2-4.fa.js)
js/art1.js      Case 001 scene plates — inline SVG + hotspot pin coordinates
js/art2-4.js    Scene plates for cases 002–004
js/game.js      engine: state, clock, map, scenes, interrogations, board, accusation, saves
```

Scene art is language-neutral by rule — no text elements anywhere in the SVG — so one set of plates serves both editions.

Adding a fifth case is just another `window.CASES.push({...})` file following the same schema, plus a `<script>` tag in `index.html` — the engine picks it up automatically and the title screen counts itself.

### Debug boot

Append a hash beginning with `debug` to jump straight to a screen. The `debug`
token is required — otherwise a shared link could hand someone every clue in a
murder mystery, and silently disable their saving. Debug boots never write to
storage.

```
#debug,case:blackwood                 game screen, fresh
#debug,case:blackwood,demo,board      evidence pre-collected, corkboard open
#debug,case:meridian,talk:corliss     interrogation open
#debug,case:blackwood,demo,acc:4      the charge sheet
#debug,brief:orpheum                  briefing screen
#debug,case:blackwood,fa              Persian edition
```
