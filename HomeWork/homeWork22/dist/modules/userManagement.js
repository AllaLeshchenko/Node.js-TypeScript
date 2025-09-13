// task3 - Вложенные пространства имен для управления пользователями
export var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            name;
            email;
            isSuperAdmin;
            constructor(name, email, isSuperAdmin = false) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            // Метод для назначения прав супер-админа
            grantSuperAdmin() {
                this.isSuperAdmin = true;
                console.log(`${this.name} теперь супер-админ.`);
            }
            // Метод для удаления прав супер-админа
            revokeSuperAdmin() {
                this.isSuperAdmin = false;
                console.log(`${this.name} больше не супер-админ.`);
            }
            // Метод для отображения информации
            getInfo() {
                return `Имя: ${this.name}, Email: ${this.email}, Супер-админ: ${this.isSuperAdmin}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map