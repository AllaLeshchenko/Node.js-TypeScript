// task3 - Вложенные пространства имен для управления пользователями

export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(
                public name: string,
                public email: string,
                public isSuperAdmin: boolean = false
            ) {}

            // Метод для назначения прав супер-админа
            grantSuperAdmin(): void {
                this.isSuperAdmin = true;
                console.log(`${this.name} теперь супер-админ.`);
            }

            // Метод для удаления прав супер-админа
            revokeSuperAdmin(): void {
                this.isSuperAdmin = false;
                console.log(`${this.name} больше не супер-админ.`);
            }

            // Метод для отображения информации
            getInfo(): string {
                return `Имя: ${this.name}, Email: ${this.email}, Супер-админ: ${this.isSuperAdmin}`;
            }
        }
    }
}
