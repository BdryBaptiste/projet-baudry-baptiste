export class User {
    id!: string;
    nom!: string;
    prenom!: string;
    adresse!: string;
    codePostal!: string;
    ville!: string;
    email!: string;
    sexe!: string;
    login!: string;
    password!: string;
    telephone!: string;

    constructor(data?: Partial<User>) {
        if (data) {
            Object.assign(this, data);
        }
    }
}