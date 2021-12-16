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
                    name: "SeedAgent",
                    age: 77,
                    email: "seed@immo.fr",
                    password: "1234",
                    tel: "0102030405",
                    isAdmin: true,
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
