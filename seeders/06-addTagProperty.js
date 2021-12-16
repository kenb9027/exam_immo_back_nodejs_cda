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
            "TagProperties",
            [
                {
                    TagId: 2,
                    PropertyId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    TagId: 4,
                    PropertyId: 1,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    TagId: 3,
                    PropertyId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    TagId: 1,
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
