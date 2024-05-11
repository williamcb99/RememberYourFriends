enum AnimalType {
    Cat = 1,
    Dog
}

export type Animal = {
    Id: number;
    Name: string;
    AnimalType: AnimalType;
    IsMale: boolean;
    Age: number;
    AgeUnit: string;
    Fur: string;
    Breed: string;
    Description: string;
}