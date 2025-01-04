import { UsersSeeder } from './user.seeder'; // Adjust the path accordingly
import { AppDataSource } from './data-source'; // Ensure this is your correct data source import

export class SeederRunner {
    async run(): Promise<void> {
        try {
            const dataSource = AppDataSource; // Assuming you have this initialized correctly
            await dataSource.initialize();  // Initialize the connection
            console.log('Database connected successfully!');

            const seeders = [UsersSeeder]; // Add other seeders here if necessary

            for (const SeederClass of seeders) {
                console.log(`Running ${SeederClass.name}...`);
                // Call the static seed method
                await SeederClass.seed(dataSource);  // This should work since `seed` is static
                console.log(`${SeederClass.name} completed!`);
            }

            console.log('Seeding completed!');
            await dataSource.destroy();  // Close the connection after seeding
        } catch (error) {
            console.error('Error during seeding:', error);
        }
    }
}

async function main() {
    const seederRunner = new SeederRunner();
    await seederRunner.run();
}

main().catch(error => {
    console.error('Error running the seeder:', error);
});