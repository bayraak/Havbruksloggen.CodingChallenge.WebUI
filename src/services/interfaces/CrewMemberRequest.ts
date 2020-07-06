export interface CrewMemberRequest {
    name: string;
    age: number;
    email: string;
    crewRole: CrewRole;
    certifiedUntil: Date;
}

export enum CrewRole {
    Captain,
    DeckCadet,
    ChiefEngineer,
    Motorman
}