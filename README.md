# The Calloway Files

A story-driven detective mystery board game for the browser. Four fully written murder cases from the archive of Calloway & Associates, 1931–1953: search the rooms, interrogate everyone, pin the evidence to the board, and name the killer before the clock runs out.

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
- **Search rooms** for physical evidence. Some things are locked until you find what opens them.
- **Question everyone.** New lines of inquiry open as evidence surfaces — confronting a suspect with the right exhibit changes what they'll say.
- **Watch the Board.** Deductions form themselves on the corkboard when you hold the right combination of evidence. Two of them can unlock a final confrontation that breaks the killer in the room.
- **Accuse** when ready: the culprit, the motive, and up to three exhibits that prove it. Right name + right motive + real proof earns the full ending; anything less earns one of the others.

Progress and best results are saved in the browser (localStorage).

## Project layout

```
index.html      shell and screens
css/style.css   the whole look — desk, dossiers, corkboard, stamps
js/case1.js     Case 001 data (locations, suspects, dialogue, clues, deductions, endings)
js/case2.js     Case 002 data
js/case3.js     Case 003 data
js/case4.js     Case 004 data
js/game.js      engine: state, clock, map, interrogations, deduction board, accusation, saves
```

Adding a fifth case is just another `window.CASES.push({...})` file following the same schema, plus a `<script>` tag in `index.html` — the engine picks it up automatically and the title screen counts itself.

### Debug boot

Append a hash to the URL to jump straight to a screen (skips saving):

```
#case:blackwood                 game screen, fresh
#case:blackwood,demo,board      evidence pre-collected, corkboard open
#case:meridian,talk:corliss     interrogation open
#brief:orpheum                  briefing screen
```
