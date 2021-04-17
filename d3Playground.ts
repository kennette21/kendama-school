// grips displayed sepeartely.

interface Trick {
    name: string,
    grip: Grip,
    combo?: Trick[],
}

enum Grip {
    pen,
    standard,
    dama
}

