# FlowFinanz Website — Deploy mit Vercel

Die Datei `index.html` in diesem Ordner ist die komplette Website in einer Datei
(aus „Webseite herstellen.zip", plus: echter Seitentitel und `noindex`, damit Google
die Vorschau nicht listet, solange sie nicht offiziell live ist).

**Schon erledigt (2026-07-24):**
- ✅ Vercel-Werkzeug installiert (`vercel`, Version 57)
- ✅ Du bist auf diesem Rechner bei Vercel angemeldet (Konto `heckelm01-dot`, via GitHub)
- ✅ Ordner mit dem Vercel-Projekt `flowfinanz-website` verknüpft
- ✅ Kostenlos: Vercel-Hobby-Tarif, keine Kreditkarte nötig

## Der eine Schritt, der noch fehlt

Terminal öffnen (Windows-Taste → „PowerShell" tippen → Enter) und diese zwei Zeilen
einfügen:

```
cd "C:\Users\Michi\Documents\AI\flowfinanz\website\deploy"
vercel deploy --prod --yes
```

Nach ca. 30 Sekunden zeigt dir der Befehl die fertige Adresse an —
sie lautet: **https://flowfinanz-website.vercel.app**

Alternativ: JARVIS bitten zu deployen und die Berechtigungs-Abfrage bestätigen
(oder einmalig sagen „erlaube vercel deploy", dann geht es künftig automatisch).

## Website später aktualisieren

Neue `index.html` in diesen Ordner legen → dieselben zwei Zeilen nochmal ausführen.
Jeder Deploy ersetzt die Live-Version; alte Stände bleiben im Vercel-Dashboard
(vercel.com) als Verlauf erhalten, man kann jederzeit zurückspringen.

## Eigene Domain anbinden (wenn es ernst wird)

1. Domain kaufen (z. B. `flow-finanz.de`, ca. 10–20 €/Jahr, z. B. bei INWX, Namecheap
   oder direkt bei Vercel).
2. Auf vercel.com → Projekt `flowfinanz-website` → Settings → Domains → Domain eintragen.
3. Vercel zeigt dir 1–2 Einträge (DNS), die du beim Domain-Anbieter einträgst. Fertig.

## Vor dem ECHTEN Live-Gang (unter eigener Domain) noch offen

1. **Impressum + Datenschutzerklärung** — fehlen komplett. Für eine Finanzberatungs-
   Website in Deutschland Pflicht (abmahnfähig, § 5 DDG / DSGVO).
2. **Testimonial „Anna K." + Badges** — „geprüfte Bewertung", Google-/ProvenExpert-Sterne
   verlinken auf `#` (Platzhalter). Werbung mit nicht existenten Bewertungen ist
   irreführend → echte Bewertungen verlinken oder Sektion vorerst rausnehmen.
3. **Alte Mail-Adresse** — Kontakt zeigt auf `kontakt@heckel-consulting.de`
   (Rebranding: auf Flow-Finanz-Adresse umstellen).
4. **HERO-1/2/3-Umschalter** oben rechts — Entwicklungs-Widget, muss vor Live-Gang raus.
5. **noindex entfernen** — die Zeile `<meta name="robots" content="noindex, nofollow">`
   aus `index.html` löschen, sobald die Seite offiziell live gehen soll.
