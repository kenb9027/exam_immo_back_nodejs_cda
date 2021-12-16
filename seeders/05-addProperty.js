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
            "Properties",
            [
                {
                    title: "Maison 1",
                    price: 250000,
                    sector: "Nord",
                    rooms: 4,
                    description: "lorem ipsum dolor sit amet.",
                    picture: "",
                    AgentId: 1,
                    TypeId: 2,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    title: "Appartement 2",
                    price: 190000,
                    sector: "Sud/Sud-Est",
                    rooms: 3,
                    description: "lorem ipsum dolor sit amet.",
                    picture: "",
                    AgentId: 1,
                    TypeId: 1,
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
