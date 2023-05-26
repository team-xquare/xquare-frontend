export interface Meal {
    date: string;
    breakfast: string[];
    breakfast_kcal: string;
    lunch: string[];
    lunch_kcal: string;
    dinner: string[];
    dinner_kcal: string;
}

export interface MealList {
    meals: Meal[];
}

export type MealTimeType = '아침' | '점심' | '저녁';
