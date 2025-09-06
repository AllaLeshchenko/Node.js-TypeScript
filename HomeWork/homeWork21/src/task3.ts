// task3 - Абстрактный класс Appliance
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

// Стиральная машина
class WashingMachine extends Appliance {
    turnOn(): void {
        console.log('Washing machine is now ON.');
    }

    turnOff(): void {
        console.log('Washing machine is now OFF.');
    }
}

// Холодильник
class Refrigerator extends Appliance {
    turnOn(): void {
        console.log('Refrigerator is now ON.');
    }

    turnOff(): void {
        console.log('Refrigerator is now OFF.');
    }
}

const appliances: Appliance[] = [
    new WashingMachine(),
    new Refrigerator()
];

for (const appliance of appliances) {
    appliance.turnOn();
    appliance.turnOff();
}
