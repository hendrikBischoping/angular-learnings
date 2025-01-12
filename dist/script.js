function greet(name) {
    console.log("hello " + name);
}
greet("Hendrik"); //    funktioniert, weil "Hendrik" ein string ist
//  greet(3);     funktioniert NICHT, weil 3 eine numer ist (siehe typisierung in Funktion)
//  ACHTUNG: Typisierungs-Fehler werden beim Kompilieren zwar angezeigt, aber "fehlerlos" vom JavaScript ausgeführt
//  Typisierungen fördern die Vermeidung von unerkannten Fehler, da die Übergabe falscher Parameter-Typen von Anfang an unterbunden wird
//  Typisierungs-Fehler werden unmittelbar im Code, sowie später beim Kompilieren durch "tsc script.ts" aufgezeigt!
//  Typisierungen sind immer optional
