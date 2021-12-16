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
            "Avantages",
            [
                {
                    name: "Jardin",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Balcon",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Terrasse",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Piscine",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Garage",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Cave",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Grenier",
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: "Place de parking",
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
