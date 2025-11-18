import java.util.Scanner;

public class Main {

    public static void temperature() {
        Scanner temp_scan = new Scanner(System.in);

        System.out.println("Выберите вариант перевода:");
        System.out.println("1. Цельсий -> Фаренгейт\n2. Фаренгейт -> Цельсий");

        try {
            int temp_var = temp_scan.nextInt();
            if (temp_var == 1) {
                System.out.println("Введите температуру в цельсиях:");
                if (temp_scan.hasNextDouble()) {
                    double temp_C = temp_scan.nextDouble();
                    double res_temp_F = (temp_C * 9/5) + 32;
                    System.out.printf("%.2f°C = %.2f°F\n", temp_C, res_temp_F);
                } else {
                    System.out.println("Ошибка: введите число через запятую!");
                    temp_scan.next();
                }
            }
            else if (temp_var == 2) {
                System.out.println("Введите температуру в фаренгейтах:");
                if (temp_scan.hasNextDouble()) {
                    double temp_F = temp_scan.nextDouble();
                    double res_temp_C = (temp_F - 32) * 5/9;
                    System.out.printf("%.2f°F = %.2f°C\n", temp_F, res_temp_C);
                } else {
                    System.out.println("Ошибка: введите число через запятую!");
                    temp_scan.next();
                }
            }
            else {
                System.out.println("Неверный выбор! Доступные варианты: 1 или 2");
            }
        } catch (Exception e) {
            System.out.println("Ошибка: введите целое число для выбора варианта!");
            temp_scan.next();
        }
    }

    public static void time() {
        Scanner time_scan = new Scanner(System.in);

        System.out.println("Выберите вариант перевода:");
        System.out.println("1. Часы -> Минуты\n2. Минуты -> Часы");
        System.out.println("3. Минуты -> Секунды\n4. Секунды -> Минуты");

        try {
            int time_var = time_scan.nextInt();
            switch (time_var) {
                case 1 -> {
                    System.out.println("Введите время в часах:");
                    if (time_scan.hasNextDouble()) {
                        double hours = time_scan.nextDouble();
                        double minutes = hours * 60;
                        System.out.printf("%.2f часов = %.2f минут\n", hours, minutes);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        time_scan.next();
                    }
                }
                case 2 -> {
                    System.out.println("Введите время в минутах:");
                    if (time_scan.hasNextDouble()) {
                        double minutes = time_scan.nextDouble();
                        double hours = minutes / 60;
                        System.out.printf("%.2f минут = %.2f часов\n", minutes, hours);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        time_scan.next();
                    }
                }
                case 3 -> {
                    System.out.println("Введите время в минутах:");
                    if (time_scan.hasNextDouble()) {
                        double minutes = time_scan.nextDouble();
                        double seconds = minutes * 60;
                        System.out.printf("%.2f минут = %.2f секунд\n", minutes, seconds);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        time_scan.next();
                    }
                }
                case 4 -> {
                    System.out.println("Введите время в секундах:");
                    if (time_scan.hasNextDouble()) {
                        double seconds = time_scan.nextDouble();
                        double minutes = seconds / 60;
                        System.out.printf("%.2f секунд = %.2f минут\n", seconds, minutes);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        time_scan.next();
                    }
                }
                default -> System.out.println("Неверный выбор! Доступные варианты: 1-4");
            }
        } catch (Exception e) {
            System.out.println("Ошибка: введите целое число для выбора варианта!");
            time_scan.next();
        }
    }

    public static void mass() {
        Scanner mass_scan = new Scanner(System.in);

        System.out.println("Выберите вариант перевода:");
        System.out.println("1. Килограммы -> Фунты\n2. Фунты -> Килограммы");
        System.out.println("3. Килограммы -> Граммы\n4. Граммы -> Килограммы");

        try {
            int mass_var = mass_scan.nextInt();
            switch (mass_var) {
                case 1 -> {
                    System.out.println("Введите массу в килограммах:");
                    if (mass_scan.hasNextDouble()) {
                        double kg = mass_scan.nextDouble();
                        double pounds = kg * 2.20462;
                        System.out.printf("%.2f кг = %.2f фунтов\n", kg, pounds);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        mass_scan.next();
                    }
                }
                case 2 -> {
                    System.out.println("Введите массу в фунтах:");
                    if (mass_scan.hasNextDouble()) {
                        double pounds = mass_scan.nextDouble();
                        double kg = pounds / 2.20462;
                        System.out.printf("%.2f фунтов = %.2f кг\n", pounds, kg);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        mass_scan.next();
                    }
                }
                case 3 -> {
                    System.out.println("Введите массу в килограммах:");
                    if (mass_scan.hasNextDouble()) {
                        double kg = mass_scan.nextDouble();
                        double grams = kg * 1000;
                        System.out.printf("%.2f кг = %.2f грамм\n", kg, grams);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        mass_scan.next();
                    }
                }
                case 4 -> {
                    System.out.println("Введите массу в граммах:");
                    if (mass_scan.hasNextDouble()) {
                        double grams = mass_scan.nextDouble();
                        double kg = grams / 1000;
                        System.out.printf("%.2f грамм = %.2f кг\n", grams, kg);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        mass_scan.next();
                    }
                }
                default -> System.out.println("Неверный выбор! Доступные варианты: 1-4");
            }
        } catch (Exception e) {
            System.out.println("Ошибка: введите целое число для выбора варианта!");
            mass_scan.next();
        }
    }

    public static void length() {
        Scanner length_scan = new Scanner(System.in);

        System.out.println("Выберите вариант перевода:");
        System.out.println("1. Метры -> Футы\n2. Футы -> Метры");
        System.out.println("3. Километры -> Мили\n4. Мили -> Километры");
        System.out.println("5. Сантиметры -> Дюймы\n6. Дюймы -> Сантиметры");

        try {
            int length_var = length_scan.nextInt();
            switch (length_var) {
                case 1 -> {
                    System.out.println("Введите длину в метрах:");
                    if (length_scan.hasNextDouble()) {
                        double meters = length_scan.nextDouble();
                        double feet = meters * 3.28084;
                        System.out.printf("%.2f метров = %.2f футов\n", meters, feet);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                case 2 -> {
                    System.out.println("Введите длину в футах:");
                    if (length_scan.hasNextDouble()) {
                        double feet = length_scan.nextDouble();
                        double meters = feet / 3.28084;
                        System.out.printf("%.2f футов = %.2f метров\n", feet, meters);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                case 3 -> {
                    System.out.println("Введите длину в километрах:");
                    if (length_scan.hasNextDouble()) {
                        double km = length_scan.nextDouble();
                        double miles = km * 0.621371;
                        System.out.printf("%.2f км = %.2f миль\n", km, miles);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                case 4 -> {
                    System.out.println("Введите длину в милях:");
                    if (length_scan.hasNextDouble()) {
                        double miles = length_scan.nextDouble();
                        double km = miles / 0.621371;
                        System.out.printf("%.2f миль = %.2f км\n", miles, km);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                case 5 -> {
                    System.out.println("Введите длину в сантиметрах:");
                    if (length_scan.hasNextDouble()) {
                        double cm = length_scan.nextDouble();
                        double inches = cm * 0.393701;
                        System.out.printf("%.2f см = %.2f дюймов\n", cm, inches);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                case 6 -> {
                    System.out.println("Введите длину в дюймах:");
                    if (length_scan.hasNextDouble()) {
                        double inches = length_scan.nextDouble();
                        double cm = inches / 0.393701;
                        System.out.printf("%.2f дюймов = %.2f см\n", inches, cm);
                    } else {
                        System.out.println("Ошибка: введите число через запятую!");
                        length_scan.next();
                    }
                }
                default -> System.out.println("Неверный выбор! Доступные варианты: 1-6");
            }
        } catch (Exception e) {
            System.out.println("Ошибка: введите целое число для выбора варианта!");
            length_scan.next();
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nКонвертер величин");
            System.out.println("1 - Температура\t2 - Время");
            System.out.println("3 - Масса\t4 - Длина");
            System.out.println("0 - Выход");
            System.out.println("Выберите категорию величины для перевода:");

            try {
                int category = scanner.nextInt();

                switch (category) {
                    case 1 -> temperature();
                    case 2 -> time();
                    case 3 -> mass();
                    case 4 -> length();
                    case 0 -> {
                        System.out.println("До свидания!");
                        return;
                    }
                    default -> System.out.println("Неверный выбор! Доступные варианты: 0-4");
                }
            } catch (Exception e) {
                System.out.println("Ошибка: введите целое число для выбора категории!");
                scanner.next();
            }
        }
    }
}