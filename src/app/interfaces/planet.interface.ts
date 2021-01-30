import { Resident } from './resident.inerface';

export interface Planet {
    climate: string;
    diameter: string;
    gravity: string;
    name: string;
    orbital_period: string;
    population: string;
    residents: Resident[];
    rotation_period: string;
    terrain: string;
}