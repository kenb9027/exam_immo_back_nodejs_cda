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
                    name: "Sid A.",
                    age: 77,
                    email: "sid@immo.fr",
                    password: "$2b$10$fFMqBhsZjRBMgADkcEYCx.YxzCOaxa4mLggHPAwa21aMHn4Osn2PS",
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
