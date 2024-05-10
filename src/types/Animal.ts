enum AnimalType {
    Cat = 1,
    Dog
}

export type Animal = {
    Name: string;
    AnimalType: AnimalType;
    IsMale: boolean;
    Age: number;
    AgeUnit: string;
    Fur: string;
    Breed: string;
    Description: string;
}