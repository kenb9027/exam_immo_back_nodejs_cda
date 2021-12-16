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
            "AvantageProperties",
            [
                {
                    AvantageId: 1,
                    PropertyId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    AvantageId: 4,
                    PropertyId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    AvantageId: 3,
                    PropertyId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    AvantageId: 8,
                    PropertyId: 2,
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
