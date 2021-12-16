"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        await queryInterface.bulkInsert(
            "Agents",
            [
                {
                    name: "Alice A.",
                    age: 38,
                    email: "alice@immo.fr",
                    password: "1234",
                    tel: "0102030405",
                    isAdmin: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Béatrice B.",
                    age: 52,
                    email: "beatrice@immo.fr",
                    password: "1234",
                    tel: "0506070809",
                    isAdmin: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Carlos C.",
                    age: 26,
                    email: "carlos@immo.fr",
                    password: "1234",
                    tel: "0203040506",
                    isAdmin: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
